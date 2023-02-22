// Type
import { LoginPayload, User } from '@webapp/models';

// Mock
import { LOGIN_DATA, USER_DATA } from '@webapp/mocks';

// Auth
import { login, logout } from '../auth';

const loginPayloadMock: LoginPayload = LOGIN_DATA;
const dataLoginMock: User = USER_DATA;

describe('Auth test', () => {
  test('fetches successfully data from an API when logging in', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(dataLoginMock),
      }),
    );

    const res = await login({ payload: loginPayloadMock });
    expect(res).toEqual(dataLoginMock);
  });

  test('fetches empty data from an API when logging out', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(null),
      }),
    );

    const res = await logout();
    expect(res).toEqual(null);
  });
});
