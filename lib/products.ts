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

export const products: Product[] = [
  {
    id: 'gpu-rtx-4090',
    name: 'Phantom RTX 4090',
    description:
      'The ultimate graphics card for gaming and creative professionals. Features 24GB GDDR6X memory, real-time ray tracing, and AI-powered DLSS 3 for breathtaking performance.',
    price: 1599,
    originalPrice: 1799,
    image: '/products/gpu.jpg',
    category: 'Components',
    badge: 'Best Seller',
    specs: ['24GB GDDR6X', '2520 MHz Boost', '384-bit Bus', '450W TDP'],
    featured: true,
  },
  {
    id: 'phone-ultra-pro',
    name: 'Nova Ultra Pro',
    description:
      'A flagship smartphone with a stunning 6.7-inch ProMotion display, advanced triple camera system, and all-day battery life powered by the latest chipset.',
    price: 1199,
    originalPrice: 1299,
    image: '/products/smartphone.jpg',
    category: 'Phones',
    badge: 'New',
    specs: [
      '6.7" OLED 120Hz',
      '256GB Storage',
      '50MP Triple Camera',
      '5000mAh Battery',
    ],
    featured: true,
  },
  {
    id: 'console-next-gen',
    name: 'Apex Gaming Console',
    description:
      'Next-generation gaming console with 4K 120fps support, ultra-fast SSD loading, and backward compatibility. Includes wireless controller.',
    price: 499,
    image: '/products/console.jpg',
    category: 'Gaming',
    badge: 'Popular',
    specs: ['4K @ 120fps', '1TB Custom SSD', 'Ray Tracing', 'Wi-Fi 6E'],
    featured: true,
  },
  {
    id: 'monitor-ultrawide',
    name: 'Horizon 34" Ultrawide',
    description:
      'Immersive ultrawide curved gaming monitor with QHD resolution, 165Hz refresh rate, and 1ms response time for competitive edge.',
    price: 799,
    originalPrice: 899,
    image: '/products/monitor.jpg',
    category: 'Displays',
    specs: ['34" QHD 3440x1440', '165Hz Refresh', '1ms Response', 'HDR 400'],
    featured: true,
  },
  {
    id: 'keyboard-mech',
    name: 'Cipher Mechanical 75%',
    description:
      'Premium compact mechanical keyboard with hot-swappable switches, per-key RGB, and a solid aluminum frame for the perfect typing experience.',
    price: 179,
    image: '/products/keyboard.jpg',
    category: 'Peripherals',
    specs: ['75% Layout', 'Hot-swap Switches', 'Per-key RGB', 'Aluminum Frame'],
  },
  {
    id: 'laptop-creator',
    name: 'Zenith Creator Pro 16',
    description:
      'Powerhouse laptop designed for creators with a stunning mini-LED display, latest-gen processor, and dedicated GPU for demanding workflows.',
    price: 2499,
    originalPrice: 2799,
    image: '/products/laptop.jpg',
    category: 'Laptops',
    badge: "Editor's Choice",
    specs: ['16" Mini-LED', '32GB DDR5', '1TB NVMe', 'RTX 4070'],
    featured: true,
  },
  {
    id: 'headphones-pro',
    name: 'Echo Pro ANC',
    description:
      'Premium wireless headphones with industry-leading active noise cancellation, spatial audio, and 40-hour battery life for uninterrupted listening.',
    price: 349,
    image: '/products/headphones.jpg',
    category: 'Audio',
    specs: [
      '40hr Battery',
      'ANC + Transparency',
      'Spatial Audio',
      'Hi-Res Codec',
    ],
  },
  {
    id: 'ssd-gen5',
    name: 'Bolt Gen5 NVMe 2TB',
    description:
      'Blazing-fast PCIe Gen5 NVMe SSD with sequential read speeds up to 12,400 MB/s. Built-in heatsink for sustained performance.',
    price: 249,
    originalPrice: 299,
    image: '/products/ssd.jpg',
    category: 'Components',
    badge: 'Sale',
    specs: [
      '2TB Capacity',
      '12,400 MB/s Read',
      'PCIe Gen5',
      'Integrated Heatsink',
    ],
  },
  {
    id: 'mouse-wireless',
    name: 'Spectre Wireless',
    description:
      'Ultra-lightweight wireless gaming mouse with a precision 25K DPI sensor, 70-hour battery, and a sleek symmetrical design.',
    price: 129,
    image: '/products/mouse.jpg',
    category: 'Peripherals',
    specs: ['25K DPI Sensor', '70hr Battery', '58g Weight', 'USB-C Charging'],
  },
  {
    id: 'tablet-creative',
    name: 'Canvas Pro 12.9',
    description:
      'Professional tablet with a stunning Liquid Retina display, M-series chip, and stylus support for digital art, note-taking, and productivity.',
    price: 1099,
    image: '/products/tablet.jpg',
    category: 'Tablets',
    badge: 'New',
    specs: [
      '12.9" Liquid Retina',
      'M3 Chip',
      '256GB Storage',
      'Stylus Support',
    ],
  },
  {
    id: 'webcam-4k',
    name: 'Clarity 4K Webcam',
    description:
      'Professional-grade 4K webcam with AI auto-framing, low-light correction, and built-in ring light for crystal-clear video calls.',
    price: 199,
    image: '/products/webcam.jpg',
    category: 'Peripherals',
    specs: [
      '4K @ 30fps',
      'AI Auto-frame',
      'Built-in Ring Light',
      'Noise Cancel Mic',
    ],
  },
  {
    id: 'speaker-smart',
    name: 'Resonance Smart Speaker',
    description:
      'Premium smart speaker with 360-degree room-filling sound, multi-room support, and built-in voice assistant for seamless smart home control.',
    price: 299,
    image: '/products/speaker.jpg',
    category: 'Audio',
    specs: [
      '360° Sound',
      'Wi-Fi 6 + BT 5.3',
      'Voice Assistant',
      'Multi-room Sync',
    ],
  },
];

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

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
