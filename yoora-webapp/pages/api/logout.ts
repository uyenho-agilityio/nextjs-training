// Libs
import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string; data?: null };

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(401).json({ message: 'Not authenticated.' });
  }

  const serialized = serialize('accessToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  });

  res.setHeader('Set-Cookie', serialized);

  if (req.method === 'POST') {
    return res.status(200).json({ message: 'Logged out successfully.', data: null });
  }

  return res.status(404).json({ message: 'Method not supported.' });
};

export default handler;
