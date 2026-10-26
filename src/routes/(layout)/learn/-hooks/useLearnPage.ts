import { useGetMapsSuspenseQuery } from '@/generated/api';

export const useLearnPage = () => {
  const getMapsSuspenseQuery = useGetMapsSuspenseQuery();
  const maps = getMapsSuspenseQuery.data.data!;

  return { state: { maps } };
};
