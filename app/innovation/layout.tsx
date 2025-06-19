import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Hub | Landing Page Builder',
  description: 'Join the innovation revolution and build tomorrow\'s solutions with cutting-edge technology and expert guidance',
};

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
