import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Layout } from './-components';

const RouteComponent = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const Route = createFileRoute('/(layout)')({
  component: RouteComponent
});
