// Type
import { Message } from '@webapp/models';

// Constant
import { API_PATH } from '@webapp/constants';

// Mock
import { FEEDBACK_DATA } from 'mocks';

// Fetch
import { fetching, fetcher } from '../fetch';

const dataMock: Message[] = FEEDBACK_DATA;

beforeEach(() => {
  global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(dataMock));
});

describe('Fetch test', () => {
  test('should fetch successfully data with SSG method', async () => {
    const res = await fetching({ endpoint: API_PATH.Messages, method: 'SSG' });
    expect(res).toEqual(dataMock);
  });

  test('should fetch successfully data with SSR method', async () => {
    const res = await fetching({ endpoint: API_PATH.Messages, method: 'SSR' });
    expect(res).toEqual(dataMock);
  });

  test('should fetch successfully data with ISR method', async () => {
    const res = await fetching({ endpoint: API_PATH.Messages, method: 'ISR' });
    expect(res).toEqual(dataMock);
  });

  test('should fetch successfully data with fetcher', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: dataMock }),
      }),
    );

    const res = await fetcher<Message[]>(API_PATH.Messages);
    expect(res).toEqual(dataMock);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
