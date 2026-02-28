export interface AreaInfo {
  name: string;
  slug: string;
  description: string;
  mapUrl: string;
}

export interface ServiceInfo {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  features: string[];
  heroImage: string;
}

export const areas: AreaInfo[] = [
  {
    name: 'Wheeling',
    slug: 'wheeling',
    description: 'Wheeling is our home base and we\'ve been proudly serving this community since 1995. As local residents ourselves, we understand the unique needs of Wheeling homeowners.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Arlington Heights',
    slug: 'arlington-heights',
    description: 'Arlington Heights is one of the largest suburbs in the Chicago area, and our team has been keeping homes and businesses here spotless for decades.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Schaumburg',
    slug: 'schaumburg',
    description: 'As a major commercial and residential hub in the northwest suburbs, Schaumburg properties deserve the best exterior cleaning services available.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Des Plaines',
    slug: 'des-plaines',
    description: 'Des Plaines homeowners and businesses trust Thomas Window Cleaning for reliable, professional exterior cleaning services year-round.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Palatine',
    slug: 'palatine',
    description: 'From downtown Palatine to the surrounding residential neighborhoods, we provide top-quality cleaning services that keep your property looking its best.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Glenview',
    slug: 'glenview',
    description: 'Glenview\'s beautiful homes deserve pristine windows and clean exteriors. Our experienced team delivers exceptional results every time.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Buffalo Grove',
    slug: 'buffalo-grove',
    description: 'Buffalo Grove residents trust Thomas Window Cleaning for reliable, high-quality exterior cleaning services that keep their homes looking beautiful year-round.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Mount Prospect',
    slug: 'mount-prospect',
    description: 'From historic downtown to newer developments, Mount Prospect homeowners count on our professional team for spotless windows, clean gutters, and pristine exteriors.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Northbrook',
    slug: 'northbrook',
    description: 'Northbrook\'s upscale homes and businesses deserve premium exterior cleaning. Our experienced crew delivers meticulous results every visit.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Prospect Heights',
    slug: 'prospect-heights',
    description: 'Prospect Heights homeowners rely on Thomas Window Cleaning for dependable, professional exterior cleaning services throughout every season.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Elk Grove Village',
    slug: 'elk-grove-village',
    description: 'Elk Grove Village\'s residential and commercial properties benefit from our thorough, professional cleaning services that restore curb appeal and protect your investment.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
  {
    name: 'Rolling Meadows',
    slug: 'rolling-meadows',
    description: 'Rolling Meadows homeowners trust our team for expert window cleaning, gutter maintenance, and power washing that keeps properties in top condition.',
    mapUrl: 'https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5',
  },
];

/** All area slugs — no secondary distinction needed anymore */
export const secondaryAreas: string[] = [];

export const services: ServiceInfo[] = [
  {
    name: 'Window Cleaning',
    slug: 'window-cleaning',
    shortName: 'Window',
    description: 'Crystal-clear, streak-free windows that let the sunshine in. Our professional window cleaning team uses industry-leading techniques and eco-friendly solutions.',
    features: [
      'Interior & exterior window cleaning',
      'Screen cleaning & track vacuuming',
      'Hard water stain removal',
      'Storm window cleaning',
      'Skylight cleaning',
      'Post-construction window cleaning',
    ],
    heroImage: '/src/assets/window-cleaning-hero.jpg',
  },
  {
    name: 'Gutter Cleaning',
    slug: 'gutter-cleaning',
    shortName: 'Gutter',
    description: 'Keep your gutters flowing freely and protect your home from water damage. Our thorough gutter cleaning service removes all debris and ensures proper drainage.',
    features: [
      'Complete debris removal',
      'Downspout flushing & unclogging',
      'Gutter inspection for damage',
      'Minor gutter repairs',
      'Before & after photos',
      'Seasonal maintenance plans',
    ],
    heroImage: '/src/assets/gutter-cleaning-hero.jpg',
  },
  {
    name: 'Power Washing',
    slug: 'power-washing',
    shortName: 'Power Washing',
    description: 'Restore your exterior surfaces to their original beauty. Our professional pressure washing removes years of dirt, grime, mold, and mildew safely and effectively.',
    features: [
      'Driveway & sidewalk cleaning',
      'Deck & patio restoration',
      'Siding & brick washing',
      'Fence cleaning & brightening',
      'Concrete surface cleaning',
      'Eco-friendly cleaning agents',
    ],
    heroImage: '/src/assets/power-washing-hero.jpg',
  },
];

export function getAreaBySlug(slug: string): AreaInfo | undefined {
  return areas.find(a => a.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find(s => s.slug === slug);
}
