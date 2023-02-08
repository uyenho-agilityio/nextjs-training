// Libs
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

// Type
import { User } from '@webapp/models';

type UserWithoutPassword = Omit<User, 'password'>;

type Data = { message: string; data?: UserWithoutPassword };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method, body } = req;

  try {
    if (method !== 'POST') {
      return res.status(404).json({ message: 'Method not supported' });
    }

    const response = await import('@webapp/database/db.json');
    const data: User[] = response.users;

    const user = data.find(
      (user: User) => user.email === body.email && user.password === body.password,
    );

    if (user) {
      // Create token
      const token = sign(
        {
          email: body.email,
        },
        process.env.SECURE_TOKEN || 'abcdefg',
        { expiresIn: '1h' },
      );

      // Set token
      const serialized: string = serialize('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 1, // expires in 1 hour
        path: '/',
      });

      res.setHeader('Set-Cookie', serialized);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;

      return res
        .status(200)
        .json({ message: 'Logged in successfully.', data: userWithoutPassword });
    }

    return res.status(401).json({ message: 'Invalid credentials.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
