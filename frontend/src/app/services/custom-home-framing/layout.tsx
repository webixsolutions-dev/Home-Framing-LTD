import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Home Wood Framing Services in Calgary',
  description: 'Custom home framing in Calgary for unique layouts, rooflines, large openings and detailed structural plans, built with accuracy and care.',
};

export default function CustomHomeFramingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}