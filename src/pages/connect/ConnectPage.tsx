import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CONNECT_PAGES } from '../../appData/connectPages';
import HeroSection from '../../components/sections/HeroSection';
import TextSection from '../../components/sections/TextSection';
import GridCardsSection from '../../components/sections/GridCardsSection';
import CallToActionSection from '../../components/sections/CallToActionSection';
import { SectionType, Section } from '../../types/connect';

const ConnectPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const page = CONNECT_PAGES.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {page.sections.map((section: Section, idx: number) => {
        switch (section.type as SectionType) {
          case 'hero':
            return <HeroSection key={idx} {...section.props} />;
          case 'textBlock':
            return <TextSection key={idx} {...section.props} />;
          case 'gridCards':
            return <GridCardsSection key={idx} {...section.props} />;
          case 'cta':
            return <CallToActionSection key={idx} {...section.props} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ConnectPage;
