import { useTheme } from '../../../theme';
import { Navigation } from './Navigation';

export default {
  title: 'Components / Navigation',
  component: Navigation,
};

const ITEMS = [
  {
    text: 'Portfolio',
    href: '/portfolio',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
];

const MORE_ITEMS = [
  {
    text: 'Shop',
    href: '/shop',
  },
  {
    text: 'Art Page',
    href: '/art-page',
  },
  {
    text: 'Business Partner',
    href: '/business-partner',
  },
];

export const PortfolioView = () => (
  <Navigation
    items={ITEMS}
    currentHref="/portfolio"
    palette={useTheme().primaryPalette}
  />
);

export const BlogView = () => (
  <Navigation
    items={ITEMS}
    currentHref="/blog"
    palette={useTheme().primaryPalette}
  />
);

export const ManyItemsView = () => (
  <Navigation
    items={[...ITEMS, ...MORE_ITEMS]}
    currentHref="/art-page"
    palette={useTheme().secondaryPalette}
  />
);
