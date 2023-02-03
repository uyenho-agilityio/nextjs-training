// Libs
import path from 'path';
import fs, { PathOrFileDescriptor } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

// Type
import { Message } from '@webapp/models';

type Data = { message: string; data?: Message | Message[] };

const buildPath = (): string => path.join(process.cwd(), 'database', 'db.json');

const extractData = (filePath: PathOrFileDescriptor) => {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method, body } = req;

  const response = await import('@webapp/database/db.json');
  const data: Message[] = response.messages;

  if (method === 'GET') {
    try {
      if (data) {
        return res.status(200).json({ message: 'Success', data });
      }
      return res.status(400).json({ message: 'Data not found' });
    } catch (err) {
      return res.status(500).json({ message: 'Failed to load data' });
    }
  } else if (method === 'POST') {
    try {
      const { name, email, message, avatar } = body;

      const newMessage = {
        id: Date.now().toString(),
        name: name,
        email: email,
        message: message,
        avatar: avatar,
      };
      data.push(newMessage);

      // Write new message to database
      const filePath = buildPath();
      const { users, messages } = extractData(filePath);

      const newObject = JSON.stringify({ users, messages: [...messages, newMessage] }, null, 2);
      fs.writeFileSync(filePath, newObject, 'utf8');

      // Successful response
      return res.status(201).json({ message: 'Success', data: newMessage });
    } catch (err) {
      return res.status(500).json({ message: 'Failed to add the message' });
    }
  }

  return res.status(404).json({ message: 'Method not supported' });
};

export default handler;
