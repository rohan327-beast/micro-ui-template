import type { DemoModel } from '../models/DemoModel';
// This file is being used for inital template later it can be changed to actual implementation

// 1. Get the base URL from Vite's environment variables.
//url = import.meta.env.VITE_SERVICE_URL;
export const fetchDemo = async (
  userId: string,
  url: string,
  token: string
): Promise<DemoModel[]> => {
  // 2. Use the variable to construct the full request URL.
  try {
    const response = await fetch(`${url}${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
