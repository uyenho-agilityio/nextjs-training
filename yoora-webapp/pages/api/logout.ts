// Lib
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string; data?: null };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    return res.status(200).json({ message: 'Logged out successfully.', data: null });
  }

  return res.status(404).json({ message: 'Method not supported.' });
};

export default handler;
