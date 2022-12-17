import axios from 'axios';

import { BASE_URL } from 'src/constants';

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

const courseService = new EventService();

export default courseService;
