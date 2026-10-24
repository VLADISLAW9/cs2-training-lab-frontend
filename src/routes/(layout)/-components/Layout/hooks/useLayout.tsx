import type { LinkComponentProps } from '@tanstack/react-router';

import { Text } from '@mantine/core';
import { BookIcon, HouseSimpleIcon } from '@phosphor-icons/react';

export const useLayout = () => {
  const navLinks: LinkComponentProps[] = [
    {
      to: '/',
      children: (
        <div className='flex items-center gap-2'>
          <HouseSimpleIcon />
          <Text>Главная</Text>
        </div>
      )
    },
    {
      to: '/learn',
      children: (
        <div className='flex items-center gap-2'>
          <BookIcon />
          <Text>Обучение</Text>
        </div>
      )
    }
  ];

  return {
    state: {
      navLinks,
      isAuth: false
    }
  };
};
