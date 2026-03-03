export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  specs: string[];
  featured?: boolean;
};

export const categories = [
  'All',
  'Components',
  'Phones',
  'Gaming',
  'Displays',
  'Laptops',
  'Peripherals',
  'Audio',
  'Tablets',
];
