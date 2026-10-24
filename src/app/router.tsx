import { createRouter } from '@tanstack/react-router';

import { routeTree } from '@/generated/router/index.gen';
import { queryClient } from '@/utils/contexts/query';

export const router = createRouter({
  basepath: '/',
  routeTree,
  context: { queryClient }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
