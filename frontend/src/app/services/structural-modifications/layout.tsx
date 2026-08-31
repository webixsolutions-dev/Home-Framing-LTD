import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Structural Modification Services in Calgary',
  description: 'Structural modification services in Calgary for wall openings, load-bearing changes, beams, headers, additions and renovation framing.',
};

export default function StructuralModificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}