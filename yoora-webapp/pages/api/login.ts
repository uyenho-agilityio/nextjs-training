// Lib
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

    // const { email, password } = req.body;

    const response = await import('@webapp/database/db.json');
    const data: User[] = response.users;

    const user = data.find(
      (user: User) => user.email === body.email && user.password === body.password,
    );

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;

      return res
        .status(200)
        .json({ message: 'Logged in successfully.', data: userWithoutPassword });
    }

    return res.status(400).json({ message: 'Email or password is wrong.' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
