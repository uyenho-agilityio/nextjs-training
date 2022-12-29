import type { NextApiRequest, NextApiResponse } from 'next';

import { Event } from 'models';

type Data = { message: string; data: Event } | { error: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('req.body:', req.body); //
  console.log('req.query:', req.query); // { cat: 'london', id: 'new-years-eve-in-london-2023' }
  console.log('req.method:', req.method); // GET
  console.log('req.headers.host:', req.headers.host); // localhost:3000
  console.log('req.url:', req.url); // /api/events/london/new-years-eve-in-london-2023

  const { method } = req;

  if (method !== 'GET') {
    return res.status(404).json({ error: 'method not supported' });
  }

  try {
    const response = await import('data.json');

    const event = response.allEvents.find(({ id }: { id: string }) => id === req.query.id);

    event
      ? res.status(200).json({ message: 'success', data: event })
      : res.status(400).json({ error: 'event not found' });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
};

export default handler;

// http://localhost:3000/api/events/london/new-years-eve-in-london-2023
// http://localhost:3000/api/events/san-francisco/innovation-summit-san-francisco
// http://localhost:3000/api/events/barcelona/concert-christian-l%C3%B6ffler-+-detect-ensemble
