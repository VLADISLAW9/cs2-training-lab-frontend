import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => <div>Hello "/(layout)/"!</div>;

export const Route = createFileRoute('/(layout)/')({
  component: HomePage
});
