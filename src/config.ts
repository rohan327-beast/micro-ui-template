const SERVICE_URL = import.meta.env.VITE_SERVICE_URL;

if (!SERVICE_URL) {
  throw new Error(
    'VITE_SERVICE_URL is not defined. Please check your .env file.'
  );
}

export const config = {
  serviceUrl: SERVICE_URL,
};
