import { createFileRoute } from '@tanstack/react-router';

const LearnPage = () => <div>Hello "/(layout)/learn/"!</div>;

export const Route = createFileRoute('/(layout)/learn/')({
  component: LearnPage
});
