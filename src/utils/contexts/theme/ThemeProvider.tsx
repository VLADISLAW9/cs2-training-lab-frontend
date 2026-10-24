import type { ReactNode } from 'react';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MantineProvider defaultColorScheme='dark' theme={theme}>
    {children}
  </MantineProvider>
);
