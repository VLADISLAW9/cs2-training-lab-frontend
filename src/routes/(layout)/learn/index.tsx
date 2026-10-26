import { Card, Image, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

import { getMapsSuspenseQueryOptions } from '@/generated/api';
import { queryClient } from '@/utils/contexts/query';

import { useLearnPage } from './-hooks';

const LearnPage = () => {
  const { state } = useLearnPage();

  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8 sm:px-6'>
      <Text className='mb-6 text-2xl font-bold' component='h1'>
        Выберите карту для обучения
      </Text>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {state.maps.map((map) => (
          <Card
            key={map.slug}
            className='overflow-hidden rounded-2xl border border-[var(--mantine-color-default-border)] p-0'
            component='article'
          >
            <Image
              alt={map.name}
              className='aspect-video w-full object-cover'
              loading='lazy'
              src={map.coverUrl}
            />
            <Text className='px-5 py-4 text-lg font-semibold' component='h2'>
              {map.name}
            </Text>
          </Card>
        ))}
      </div>
    </section>
  );
};

export const Route = createFileRoute('/(layout)/learn/')({
  component: LearnPage,
  loader: () => queryClient.query(getMapsSuspenseQueryOptions())
});
