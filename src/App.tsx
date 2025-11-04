import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Demo from './components/demo/demo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const query: QueryClient = new QueryClient();

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Demo />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={query}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={appStore}>
        <RouterProvider router={appRoutes} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

// This code is only for TypeScript and for dev tools support
// declare global {
//   interface Window {
//     __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient;
//   }
// }

// // This code is for all users
// window.__TANSTACK_QUERY_CLIENT__ = query;
