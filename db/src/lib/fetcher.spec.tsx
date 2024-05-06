import { fetcher } from './fetcher';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocking for Jest
fetchMock.enableMocks();

// Describe block for test suite
describe('fetcher function', () => {
  // Before each test, reset any previous mocks
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  // Test for successful fetch
  it('should fetch data successfully', async () => {
    const mockData = { message: 'Success' };
    // Simulate a successful fetch response
    fetchMock.mockResponseOnce(JSON.stringify(mockData), { status: 200 });

    // Call fetcher with a test URL
    const data = await fetcher('https://api.example.com/data');

    // Assert that the data returned is as expected
    expect(data).toEqual(mockData);
  });

  // Test for fetch failure with 500 status
  it('should throw an error on a failed fetch', async () => {
    // Simulate a failed fetch response
    fetchMock.mockResponseOnce('Error message', { status: 500 });

    // Expect fetcher to throw an error with a specific message
    await expect(fetcher('https://api.example.com/data')).rejects.toThrow(
      'Network response was not okay'
    );
  });

  // Test for network error
  it('should throw an error on network failure', async () => {
    // Simulate a network error
    fetchMock.mockRejectOnce(new Error('Network error'));

    // Expect fetcher to throw a network error
    await expect(fetcher('https://api.example.com/data')).rejects.toThrow(
      'Network error'
    );
  });
});
