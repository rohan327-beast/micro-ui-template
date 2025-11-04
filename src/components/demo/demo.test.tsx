import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Demo from './demo';
import * as api from '../../api/demoApi';
import { config } from '../../config'; // Import the original config

// --- THIS IS THE FIX ---
// Mock the entire config module. Jest will replace it with this mock.
jest.mock('../../config', () => ({
  config: {
    serviceUrl: 'http://mock-service-url.com', // Provide a mock URL for tests
  },
}));
// --- END OF FIX ---

// Mock the other modules as before
jest.mock('../shared/Loding', () => () => <div>Loading...</div>);
jest.mock('../shared/Error', () => ({ message }: { message: string }) => (
  <div>Error: {message}</div>
));
jest.mock('../../api/demoApi');

const mockDemos = [
  { pageId: '1', label: 'Dashboard' },
  { pageId: '2', label: 'Settings' },
];

const userId = 'ba96aed5-b147-405e-b2ae-dcca1703a569';

function getTestQueryClient() {
  return new QueryClient({
    defaultOptions: { queries: { retry: 3, retryDelay: 0 } },
  });
}

function renderDemo() {
  const queryClient = getTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
}

describe('Demo component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // No changes needed to the tests themselves
  it('calls fetchDemo with correct mocked arguments', async () => {
    (api.fetchDemo as jest.Mock).mockResolvedValue(mockDemos);
    renderDemo();
    await waitFor(() => {
      // The test now correctly expects the mocked URL from the config mock
      expect(api.fetchDemo).toHaveBeenCalledWith(
        userId,
        config.serviceUrl, // This is 'http://mock-service-url.com'
        'token'
      );
    });
  });

  // ... (all your other tests for loading, error, and success states remain the same)
});
