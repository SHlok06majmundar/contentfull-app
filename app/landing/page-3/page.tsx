import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { graphqlClient, LANDING_PAGE_QUERY } from '../../../lib/contentful';
import { Navigation } from '../../../components/layout/Navigation';
import { HeroBlock } from '../../../components/blocks/HeroBlock';
import { TwoColumnRow } from '../../../components/blocks/TwoColumnRow';
import { ImageGrid } from '../../../components/blocks/ImageGrid';
import { LandingPage, ComponentConfig } from '../../../types/contentful';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'page-3' },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  const page = getMockData('page-3');

  return {
    title: page.title,
    description: `Landing page: ${page.title}`,
    openGraph: {
      title: page.title,
      description: `Landing page: ${page.title}`,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/page-3`,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: `Landing page: ${page.title}`,
    },
  };
}

async function getLandingPageData(slug: string) {
  try {
    const data = await graphqlClient.request(LANDING_PAGE_QUERY, { slug });
    return data.pageCollection?.items[0] as LandingPage;
  } catch (error) {
    console.error('Failed to fetch landing page data:', error);
    return null;
  }
}

function getMockData(slug: string): LandingPage {
  return {
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
  };
}

export default async function LandingPageThree() {
  let page = await getLandingPageData('page-3');
  
  if (!page) {
    page = getMockData('page-3');
  }
  
  if (!page) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: `Landing page: ${page.title}`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/page-3`,
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
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/landing/page-3`,
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