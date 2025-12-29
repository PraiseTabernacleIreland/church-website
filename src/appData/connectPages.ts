import { ConnectPage, Section } from "../types/connect";
import { FELLOWSHIPS } from "./fellowship";
import { GROWTH_GROUPS } from "./growth";
import { MINISTRIES } from "./ministry";
import { PageRoutes, PageName } from "../utils/routes";

/**
 * Connect page configuration builder
 * 
 * This file dynamically generates page configurations for all fellowship, growth, and ministry pages.
 * Each page is composed of reusable sections (hero, text blocks, grid cards, CTAs) assembled from
 * the data defined in fellowship.ts, growth.ts, and ministry.ts.
 * 
 * This approach enables:
 * - Content-driven page generation without duplicating code
 * - Consistent page structure across all connect pages
 * - Easy addition of new pages by simply adding data to source files
 */

/**
 * Generate fellowship pages from fellowship data
 * Each fellowship page includes: hero section, about text, activities grid, and join CTA
 */
const fellowshipPages: ConnectPage[] = Object.entries(FELLOWSHIPS).map(([key, fellowship]) => ({
  category: "fellowship",
  slug: key.toLowerCase(),
  sections: [
    {
      type: "hero",
      props: {
        backGroundImageSrc: `url(${fellowship.heroImage})`,
        height: "40vh",
        title: fellowship.name,
        message: fellowship.description,
      },
    },
    {
      type: "textBlock",
      props: {
        heading: `About ${fellowship.name}`,
        text: fellowship.about,
        backgroundColor: "#f9f9f9",
      },
    },
    {
      type: "gridCards",
      props: {
        heading: "What We Do",
        items: fellowship.activities,
      },
    },
    {
      type: "cta",
      props: {
        heading: `Join ${fellowship.name}`,
        message: fellowship.joinInstructions,
        buttonText: "Get Involved",
        buttonLink: PageRoutes[PageName.Contact],
        backgroundColor: "#055594",
        textColor: "#fff",
      },
    },
  ],
}));

/**
 * Generate growth group pages from growth data
 * Each growth page includes: hero section, purpose text, activities grid, and join CTA
 */
const growthPages: ConnectPage[] = Object.entries(GROWTH_GROUPS).map(([key, growth]) => ({
  category: "growth",
  slug: key.toLowerCase(),
  sections: [
    {
      type: "hero",
      props: {
        backGroundImageSrc: `url(${growth.heroImage})`,
        height: "40vh",
        title: growth.name,
        message: growth.description,
      },
    },
    {
      type: "textBlock",
      props: {
        heading: `Why ${growth.name} Matters`,
        text: growth.whyItMatters,
        backgroundColor: "#f9f9f9",
      },
    },
    {
      type: "gridCards",
      props: {
        heading: `How ${growth.name} Works`,
        items: growth.activities,
      },
    },
    {
      type: "cta",
      props: {
        heading: `Get Involved with ${growth.name}`,
        message: growth.joinInstructions,
        buttonText: "Join Now",
        buttonLink: PageRoutes[PageName.Contact],
        backgroundColor: "#055594",
        textColor: "#fff",
      },
    },
  ],
}));

/**
 * Generate ministry pages from ministry data
 * Each ministry page includes: hero section, image gallery, and join CTA
 */
const ministryPages: ConnectPage[] = Object.entries(MINISTRIES).map(([key, ministry]) => ({
  category: "ministries",
  slug: key.toLowerCase(),
  sections: [
    {
      type: "hero",
      props: {
        backGroundImageSrc: `url(${ministry.heroImage})`,
        height: "40vh",
        title: ministry.name,
        message: ministry.description,
      },
    },
    {
      type: "gridCards",
      props: {
        heading: `A Glimpse into ${ministry.name}`,
        items: ministry.relatedImages?.map((img) => ({ image: img, name: "", description: "" })) || [],
        backgroundColor: "#f9f9f9",
      },
    },
    {
      type: "cta",
      props: {
        heading: `Join ${ministry.name}`,
        message: ministry.joinInstructions,
        buttonText: "Get Involved",
        buttonLink: PageRoutes[PageName.Contact],
        backgroundColor: "#f1f5f9",
        textColor: "#333",
      },
    },
  ],
}));

/**
 * Combined array of all connect pages (fellowships, growth groups, and ministries)
 * Used by the ConnectPage component to dynamically render pages based on route
 */
export const CONNECT_PAGES: ConnectPage[] = [
  ...fellowshipPages,
  ...growthPages,
  ...ministryPages,
];
