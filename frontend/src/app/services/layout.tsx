import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wood Framing Services in Calgary | Home Framing LTD',
  description: 'Explore professional wood framing services in Calgary for homes, commercial builds, custom projects, renovations and structural modifications.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}