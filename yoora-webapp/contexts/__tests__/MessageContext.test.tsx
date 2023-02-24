// Lib
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Context
import { MessageProvider } from '../MessageContext';

// Hook
import { useMessageContext } from '@webapp/hooks';

// Mock
import { FEEDBACK_DATA } from '@webapp/mocks';

// Type
import { Message } from '@webapp/models';

describe('MassageContext test', () => {
  const messageDataMock: Message = FEEDBACK_DATA[0];
  const successFunctionMock = jest.fn();
  const failFunctionMock = jest.fn();

  const MessageComponentMock = () => {
    const { createMessage, data } = useMessageContext();

    return (
      <>
        <h1>{data?.length}</h1>
        <button
          onClick={() => void createMessage(messageDataMock, successFunctionMock, failFunctionMock)}
        >
          Create message
        </button>
      </>
    );
  };

  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: messageDataMock }),
    }),
  );

  test('should call createMessage function', async () => {
    render(
      <MessageProvider>
        <MessageComponentMock />
      </MessageProvider>,
    );

    const button = screen.getByRole('button', { name: /create/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('1');
    });
  });
});
