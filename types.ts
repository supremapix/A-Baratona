export interface LocationData {
  name: string;
  slug: string;
  type: 'city' | 'neighborhood';
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  size: string;
  title: string;
  price: string;
  features: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
}