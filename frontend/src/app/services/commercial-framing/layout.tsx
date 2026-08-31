import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Wood Framing Services in Calgary',
  description: 'Commercial framing services in Calgary for offices, retail spaces, tenant improvements and business builds with reliable project coordination.',
};

export default function CommercialFramingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}