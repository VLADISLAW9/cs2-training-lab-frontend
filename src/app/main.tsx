import { RouterProvider } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';

import { queryClient } from '@/utils/contexts/query';

import { Provider } from './provider';
import { router } from './router';

const init = () => {
  const root = createRoot(document.getElementById('app')!);

  return root.render(
    <Provider queryClient={queryClient}>
      <RouterProvider router={router} />
    </Provider>
  );
};

init();
