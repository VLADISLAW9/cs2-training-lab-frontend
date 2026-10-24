import type { ReactNode } from 'react';

import { AppShell, Button, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

import { useLayout } from './hooks';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { state } = useLayout();

  return (
    <AppShell
      navbar={{
        width: 170,
        breakpoint: 'md'
      }}
      className='p-5'
      header={{ height: 60 }}
    >
      <AppShell.Header className='px-5 flex items-center justify-between'>
        <Text className='font-extrabold '>CS2 Training Lab</Text>
        {state.isAuth && <Text className='font-extrabold '>User</Text>}
        {!state.isAuth && (
          <Button>
            <Link to='/'>Войти через Steam</Link>
          </Button>
        )}
      </AppShell.Header>

      <AppShell.Navbar className=' p-3 flex flex-col  gap-3'>
        {state.navLinks.map((navLink) => (
          <Button key={navLink.to} className='w-full' variant='subtle'>
            <Link {...navLink} />
          </Button>
        ))}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
