import fetches from '@siberiacancode/fetches';

export const instance = fetches.create({
  baseURL: '/api',
  validateStatus: (status) => status < 500
});
