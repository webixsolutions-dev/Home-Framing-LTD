import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Wood Framing Services in Calgary',
  description: 'Residential framing services in Calgary for new homes, additions, basements and renovations, with accurate layouts and dependable workmanship.',
};

export default function ResidentialFramingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}