import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wood Framing Projects | Home Framing LTD',
  description: 'View residential, commercial and custom wood framing projects completed by Home Framing LTD across Calgary and nearby areas.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}