import type { QueryClient } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@/utils/contexts/theme';

import './styles/global.css';

interface ProviderProps {
  children: ReactNode;
  queryClient: QueryClient;
}

export const Provider = ({ queryClient, children }: ProviderProps) => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeProvider>
);
