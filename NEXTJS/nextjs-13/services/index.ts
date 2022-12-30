import axios from 'axios';

import { BASE_URL } from '@webapp/constants';

class EventService {
  private axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: 'application/json',
    },
  });

  /**
   * Get data from server
   * @param url
   * @returns
   */
  get<T>(url: string): Promise<T> {
    return this.axiosClient.get(url);
  }
}

const eventService = new EventService();

export default eventService;
