import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { graphqlClient, LANDING_PAGE_QUERY } from '../../../lib/contentful';
import { Navigation } from '../../../components/layout/Navigation';
import { HeroBlock } from '../../../components/blocks/HeroBlock';
import { TwoColumnRow } from '../../../components/blocks/TwoColumnRow';
import { ImageGrid } from '../../../components/blocks/ImageGrid';
import type { LandingPage, ComponentConfig } from '../../../types/contentful';

// Define PageProps properly to work with Next.js 15.3.0 App Router
type PageProps = {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateStaticParams() {
  return [
    { slug: 'page-1' },
    { slug: 'page-2' },
    { slug: 'page-3' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const data: any = await graphqlClient.request(LANDING_PAGE_QUERY, {
      slug: params.slug,
    });

    const page = data.pageCollection?.items[0] as LandingPage;

    if (!page) {
      const mockPage = getMockData(params.slug);
      if (!mockPage) {
        return {
          title: 'Page Not Found',
          description: 'The requested page could not be found.',
        };
      }

      return {
        title: mockPage.title,
        description: `Landing page: ${mockPage.title}`,
        openGraph: {
          title: mockPage.title,
          description: `Landing page: ${mockPage.title}`,
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/${params.slug}`,
        },
        twitter: {
          card: 'summary_large_image',
          title: mockPage.title,
          description: `Landing page: ${mockPage.title}`,
        },
      };
    }

    return {
      title: page.title,
      description: `Landing page: ${page.title}`,
      openGraph: {
        title: page.title,
        description: `Landing page: ${page.title}`,
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/${params.slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: page.title,
        description: `Landing page: ${page.title}`,
      },
    };
  } catch (error) {
    const mockPage = getMockData(params.slug);
    if (!mockPage) {
      return {
        title: 'Error',
        description: 'An error occurred while loading the page.',
      };
    }

    return {
      title: mockPage.title,
      description: `Landing page: ${mockPage.title}`,
    };
  }
}

async function getLandingPageData(slug: string) {
  try {
    const data: any = await graphqlClient.request(LANDING_PAGE_QUERY, { slug });
    return data.pageCollection?.items[0] as LandingPage;
  } catch (error) {
    console.error('Failed to fetch landing page data:', error);
    return null;
  }
}

function getMockData(slug: string): LandingPage | null {
  const mockData: Record<string, LandingPage> = {
    'page-1': {
      sys: { id: 'page-1' },
      title: 'Premium Solutions for Modern Business',
      slug: 'page-1',
      layoutConfig: {
        components: [
          {
            id: 'hero-1',
            type: 'hero',
            data: {
              heading: 'Transform Your Business Today',
              subtitle: 'Discover powerful solutions that drive growth and innovation for your company',
              ctaText: 'Get Started Now',
              ctaUrl: '/contact',
              backgroundImage: {
                sys: { id: 'bg-1' },
                title: 'Business Hero Background',
                description: 'Modern office workspace',
                url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
                width: 1200,
                height: 600,
              },
            },
          },
          {
            id: 'two-col-1',
            type: 'twoColumn',
            data: {
              leftHeading: 'Innovative Features',
              leftSubtitle: 'Our platform provides cutting-edge tools designed to streamline your workflow and boost productivity. Experience the difference with our advanced technology.',
              leftCtaText: 'Learn More',
              leftCtaUrl: '/features',
              rightImage: {
                sys: { id: 'feature-img' },
                title: 'Feature Illustration',
                description: 'Modern technology dashboard',
                url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
                width: 600,
                height: 400,
              },
            },
          },
          {
            id: 'grid-1',
            type: 'imageGrid',
            data: {
              images: [
                {
                  sys: { id: 'grid-1-1' },
                  title: 'Team Collaboration',
                  description: 'Team working together',
                  url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-1-2' },
                  title: 'Data Analytics',
                  description: 'Analytics dashboard',
                  url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-1-3' },
                  title: 'Mobile Solutions',
                  description: 'Mobile app interface',
                  url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-1-4' },
                  title: 'Cloud Infrastructure',
                  description: 'Cloud computing concept',
                  url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
              ],
            },
          },
        ],
      },
    },
    'page-2': {
      sys: { id: 'page-2' },
      title: 'Creative Design & Development',
      slug: 'page-2',
      layoutConfig: {
        components: [
          {
            id: 'hero-2',
            type: 'hero',
            data: {
              heading: 'Unleash Your Creative Potential',
              subtitle: 'Build stunning websites and applications with our comprehensive design and development tools',
              ctaText: 'Start Creating',
              ctaUrl: '/signup',
              backgroundImage: {
                sys: { id: 'bg-2' },
                title: 'Creative Hero Background',
                description: 'Designer workspace with creative tools',
                url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop',
                width: 1200,
                height: 600,
              },
            },
          },
          {
            id: 'grid-2',
            type: 'imageGrid',
            data: {
              images: [
                {
                  sys: { id: 'grid-2-1' },
                  title: 'UI Design',
                  description: 'Modern UI design concepts',
                  url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-2-2' },
                  title: 'Brand Identity',
                  description: 'Creative brand design',
                  url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-2-3' },
                  title: 'Web Development',
                  description: 'Code and development',
                  url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-2-4' },
                  title: 'Digital Art',
                  description: 'Digital creative artwork',
                  url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
              ],
            },
          },
          {
            id: 'two-col-2',
            type: 'twoColumn',
            data: {
              leftHeading: 'Professional Tools',
              leftSubtitle: 'Access a complete suite of professional-grade design and development tools. From concept to deployment, we have everything you need to bring your vision to life.',
              leftCtaText: 'Explore Tools',
              leftCtaUrl: '/tools',
              rightImage: {
                sys: { id: 'tools-img' },
                title: 'Professional Tools',
                description: 'Design tools and workspace',
                url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
                width: 600,
                height: 400,
              },
            },
          },
        ],
      },
    },
    'page-3': {
      sys: { id: 'page-3' },
      title: 'Technology & Innovation Hub',
      slug: 'page-3',
      layoutConfig: {
        components: [
          {
            id: 'hero-3',
            type: 'hero',
            data: {
              heading: 'Shape the Future with Technology',
              subtitle: 'Join the innovation revolution and build tomorrow\'s solutions with cutting-edge technology and expert guidance',
              ctaText: 'Start Innovation',
              ctaUrl: '/innovation',
              backgroundImage: {
                sys: { id: 'bg-3' },
                title: 'Technology Hero Background',
                description: 'Futuristic technology workspace',
                url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&h=600&fit=crop',
                width: 1200,
                height: 600,
              },
            },
          },
          {
            id: 'grid-3',
            type: 'imageGrid',
            data: {
              images: [
                {
                  sys: { id: 'grid-3-1' },
                  title: 'AI & Machine Learning',
                  description: 'Artificial intelligence concepts',
                  url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-3-2' },
                  title: 'Blockchain Technology',
                  description: 'Blockchain and cryptocurrency',
                  url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-3-3' },
                  title: 'IoT Solutions',
                  description: 'Internet of Things devices',
                  url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
                {
                  sys: { id: 'grid-3-4' },
                  title: 'Quantum Computing',
                  description: 'Advanced computing technology',
                  url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=300&fit=crop',
                  width: 300,
                  height: 300,
                },
              ],
            },
          },
          {
            id: 'two-col-3',
            type: 'twoColumn',
            data: {
              leftHeading: 'Next-Gen Solutions',
              leftSubtitle: 'Harness the power of emerging technologies to solve complex challenges. Our platform provides the tools and expertise needed to build scalable, innovative solutions for the digital age.',
              leftCtaText: 'Explore Solutions',
              leftCtaUrl: '/solutions',
              rightImage: {
                sys: { id: 'solutions-img' },
                title: 'Technology Solutions',
                description: 'Advanced technology interface',
                url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
                width: 600,
                height: 400,
              },
            },
          },
        ],
      },
    },
  };

  return mockData[slug] || null;
}

export default async function LandingPage({ params }: PageProps) {
  let page = await getLandingPageData(params.slug);
  
  if (!page) {
    page = getMockData(params.slug);
  }
  
  if (!page) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: `Landing page: ${page.title}`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/${params.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: process.env.NEXT_PUBLIC_SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.title,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/${params.slug}`,
        },
      ],
    },
  };

  const renderComponent = (component: ComponentConfig) => {
    switch (component.type) {
      case 'hero':
        return <HeroBlock key={component.id} data={component.data as any} />;
      case 'twoColumn':
        return <TwoColumnRow key={component.id} data={component.data as any} />;
      case 'imageGrid':
        return <ImageGrid key={component.id} data={component.data as any} />;
      default:
        return null;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {page.layoutConfig.components.map(renderComponent)}
      </main>
    </>
  );
}