import type { NextApiRequest, NextApiResponse } from 'next';

import { CateEvent } from 'models';

type Data = { message: string; data: CateEvent[] } | { error: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('req.body:', req.body); //
  console.log('req.query:', req.query); // { cat: 'london' }
  console.log('req.method:', req.method); // GET
  console.log('req.headers.host:', req.headers.host); // localhost:3000
  console.log('req.url:', req.url); // /api/events/london

  const { method } = req;

  if (method !== 'GET') {
    return res.status(404).json({ error: 'method not supported' });
  }

  try {
    const response = await import('data.json');

    const catEvents = response.allEvents.filter(
      ({ city }: { city: string }) => city === req.query.cat,
    );

    catEvents
      ? res.status(200).json({ message: 'success', data: catEvents })
      : res.status(400).json({ error: 'catEvent not found' });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
};

export default handler;

// http://localhost:3000/api/events/london --> 6 Events in london
// http://localhost:3000/api/events/san-francisco --> 4 Events in san-francisco
// http://localhost:3000/api/events/barcelona --> 5 Events in barcelona
