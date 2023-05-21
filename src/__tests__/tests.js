import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('get lever gamer', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('get lever gamer not available', () => {
  fetchData.mockReturnValue({});
  getLevel(5);
  expect(fetchData).toBeCalledWith('https://server/user/5');
});
