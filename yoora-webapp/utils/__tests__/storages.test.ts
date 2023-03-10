// Mock
import { USER_DATA } from '@webapp/__mocks__';

// Constant
import { STORAGE_KEYS } from '@webapp/constants';

// Type
import { User } from '@webapp/models';

// Utils
import { clearStorage, getStorage, setStorage } from '../storages';

describe('storages test', () => {
  beforeEach(() => {
    clearStorage();
  });

  const emptyDataMock = '';
  const keyMock = STORAGE_KEYS.CURRENT_USER;

  const { id, email, password, avatar } = USER_DATA;
  const dataMock: User = { id, email, password, avatar };

  test('should get the user from local storage if have data', () => {
    setStorage<User>(keyMock, dataMock);
    expect(getStorage(keyMock)).toEqual(JSON.parse(JSON.stringify(dataMock)));
  });

  test('should get empty data from local storage if not have data', () => {
    setStorage<User>(keyMock, dataMock);
    clearStorage(keyMock);
    expect(getStorage(keyMock)).toMatch(emptyDataMock);
  });
});
