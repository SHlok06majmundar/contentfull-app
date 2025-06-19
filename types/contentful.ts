export interface ContentfulAsset {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}

export interface HeroBlockData {
  heading: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
  backgroundImage: ContentfulAsset;
}

export interface TwoColumnRowData {
  leftHeading: string;
  leftSubtitle: string;
  leftCtaText: string;
  leftCtaUrl: string;
  rightImage: ContentfulAsset;
}

export interface ImageGridData {
  images: ContentfulAsset[];
}

export interface ComponentConfig {
  id: string;
  type: 'hero' | 'twoColumn' | 'imageGrid';
  data: HeroBlockData | TwoColumnRowData | ImageGridData;
}

export interface LayoutConfig {
  components: ComponentConfig[];
}

export interface LandingPage {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
  layoutConfig: LayoutConfig;
  heroBlock?: HeroBlockData;
  twoColumnRow?: TwoColumnRowData;
  imageGrid?: ImageGridData;
}