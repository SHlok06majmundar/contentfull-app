import { createClient } from 'contentful';
import { GraphQLClient } from 'graphql-request';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const graphqlClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

export { client, graphqlClient };

export const LANDING_PAGE_QUERY = `
  query GetLandingPage($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys {
          id
        }
        title
        slug
        layoutConfig
        heroBlock {
          heading
          subtitle
          ctaText
          ctaUrl
          backgroundImage {
            sys {
              id
            }
            title
            description
            url
            width
            height
          }
        }
        twoColumnRow {
          leftHeading
          leftSubtitle
          leftCtaText
          leftCtaUrl
          rightImage {
            sys {
              id
            }
            title
            description
            url
            width
            height
          }
        }
        imageGrid {
          images {
            sys {
              id
            }
            title
            description
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const ALL_LANDING_PAGES_QUERY = `
  query GetAllLandingPages {
    pageCollection {
      items {
        slug
      }
    }
  }
`;