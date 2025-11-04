Object.defineProperty(global, 'import.meta', {
  value: {
    env: {
      VITE_SERVICE_URL: 'http://mock-service-url.com',
    },
  },
  writable: true,
});

import '@testing-library/jest-dom';
// jest-setup.ts
