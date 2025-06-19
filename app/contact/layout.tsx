import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Landing Page Builder',
  description: 'Reach out to our team with questions, feedback, or support inquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
