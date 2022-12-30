import { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { ApiPath, Event } from '@webapp/models';
import eventService from '@webapp/services';

type Data = { message: string; data: Event[] } | { error: string };

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log('req.body:', req.body); //
  console.log('req.query:', req.query); // {}
  console.log('req.method:', req.method); // GET
  console.log('req.headers.host:', req.headers.host); // localhost:3000
  console.log('req.url:', req.url); // /api/events

  const { method } = req;

  if (method !== 'GET') {
    return res.status(404).json({ error: 'method not supported' });
  }

  try {
    // const response = await import('data.json');
    // const data = response.events_categories;
    // res.status(200).json({ message: 'success', data });

    const response = await eventService.get<AxiosResponse<Event[]>>(ApiPath.Events);
    res.status(200).json({ message: 'success', data: response.data });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
};

export default handler;

// http://localhost:3000/api/events --> 3 cities
