// Constants
import { API_PATH, BASE_URL } from '@webapp/constants';

// Types
import { LoginPayload, User } from '@webapp/models';

export const login = async ({
  payload,
  endpoint = `${BASE_URL}${API_PATH.Login}`,
}: {
  payload: LoginPayload;
  endpoint?: RequestInfo | URL;
}): Promise<{ message: string; data: User }> => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(endpoint, requestOptions);
  const result: Promise<{ message: string; data: User }> = response.json();

  return result;
};

export const logout = async (
  endpoint?: RequestInfo | URL,
): Promise<{ message: string; data: null }> => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(endpoint || `${BASE_URL}${API_PATH.Logout}`, requestOptions);
  const result: Promise<{ message: string; data: null }> = response.json();

  return result;
};
