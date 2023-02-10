// Constant
import { BASE_URL } from '@webapp/constants';

// Types
import { Message } from '@webapp/models';
import { ApiPath, Methods } from '@webapp/types';

// Fetch
import { fetching } from './fetch';

export const URL = `${BASE_URL}${ApiPath.Messages}`;

/**
 * Get all messages
 * @param method
 * @returns
 */
export const fetchMessages = (method: Methods) => fetching({ endpoint: URL, method });

/**
 * Add new message
 * @param data
 * @returns
 */
export const addNewMessage = async ({
  message,
  endpoint = URL,
}: {
  message: Message;
  endpoint?: RequestInfo | URL;
}): Promise<Message> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(endpoint, requestOptions);
  const { data } = await res.json();

  return data as Promise<Message>;
};
