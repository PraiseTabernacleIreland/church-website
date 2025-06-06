export type SectionType = 'hero' | 'textBlock' | 'gridCards' | 'cta';

export interface HeroSectionProps {
  backGroundImageSrc: string;
  height?: string;
  title: string;
  message?: string;
}

export interface TextSectionProps {
  heading: string;
  text: string;
  backgroundColor?: string;
}

export interface CardItem {
  image: string;
  name: string;
  description: string;
}

export interface GridCardsSectionProps {
  heading: string;
  items: CardItem[];
  backgroundColor?: string;
}

export interface CallToActionSectionProps {
  heading: string;
  message: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface Section<T = any> {
  type: SectionType;
  props: T;
}

export interface ConnectPage {
  category: string;
  slug: string;
  sections: Section[];
}
