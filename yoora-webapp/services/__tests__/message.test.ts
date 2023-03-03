// Type
import { Message } from '@webapp/models';

// Mock
import { FEEDBACK_DATA } from '@webapp/mocks';

// Message
import { addNewMessage, fetchMessages } from '../message';

describe('Message test', () => {
  // Get all messages
  test('fetches successfully data from an API', async () => {
    const dataMock: Message[] = FEEDBACK_DATA;

    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve(dataMock));

    const res = await fetchMessages('SSR');
    expect(res).toEqual(dataMock);
  });

  // Create new message
  test('fetches a message successfully', async () => {
    const dataMock: Message = FEEDBACK_DATA[0];

    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: dataMock }),
      }),
    );

    const res = await addNewMessage({ message: dataMock });
    expect(res).toEqual(dataMock);
  });
});
