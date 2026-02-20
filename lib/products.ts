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
  // --- EXISTING PRODUCTS (1-12) ---
  {
    id: 'gpu-rtx-4090',
    name: 'Phantom RTX 4090',
    description:
      'The ultimate graphics card for gaming and creative professionals. Features 24GB GDDR6X memory and DLSS 3.',
    price: 1599,
    originalPrice: 1799,
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800',
    category: 'Components',
    badge: 'Best Seller',
    specs: ['24GB GDDR6X', '2520 MHz Boost', '384-bit Bus', '450W TDP'],
    featured: true,
  },
  {
    id: 'phone-ultra-pro',
    name: 'Nova Ultra Pro',
    description:
      'A flagship smartphone with a stunning 6.7-inch ProMotion display and advanced triple camera system.',
    price: 1199,
    originalPrice: 1299,
    image:
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800',
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
      'Next-generation gaming console with 4K 120fps support and ultra-fast SSD loading.',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=800',
    category: 'Gaming',
    badge: 'Popular',
    specs: ['4K @ 120fps', '1TB Custom SSD', 'Ray Tracing', 'Wi-Fi 6E'],
    featured: true,
  },
  {
    id: 'monitor-ultrawide',
    name: 'Horizon 34" Ultrawide',
    description:
      'Immersive ultrawide curved gaming monitor with QHD resolution and 165Hz refresh rate.',
    price: 799,
    originalPrice: 899,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800',
    category: 'Displays',
    specs: ['34" QHD 3440x1440', '165Hz Refresh', '1ms Response', 'HDR 400'],
    featured: true,
  },
  {
    id: 'keyboard-mech',
    name: 'Cipher Mechanical 75%',
    description:
      'Premium compact mechanical keyboard with hot-swappable switches and per-key RGB.',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800',
    category: 'Peripherals',
    specs: ['75% Layout', 'Hot-swap Switches', 'Per-key RGB', 'Aluminum Frame'],
  },
  {
    id: 'laptop-creator',
    name: 'Zenith Creator Pro 16',
    description:
      'Powerhouse laptop designed for creators with a stunning mini-LED display and dedicated GPU.',
    price: 2499,
    originalPrice: 2799,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800',
    category: 'Laptops',
    badge: "Editor's Choice",
    specs: ['16" Mini-LED', '32GB DDR5', '1TB NVMe', 'RTX 4070'],
    featured: true,
  },
  {
    id: 'headphones-pro',
    name: 'Echo Pro ANC',
    description:
      'Premium wireless headphones with industry-leading active noise cancellation.',
    price: 349,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
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
      'Blazing-fast PCIe Gen5 NVMe SSD with sequential read speeds up to 12,400 MB/s.',
    price: 249,
    originalPrice: 299,
    image:
      'https://images.unsplash.com/photo-1597872200370-493dea23928e?q=80&w=800',
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
      'Ultra-lightweight wireless gaming mouse with a precision 25K DPI sensor.',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1527669219347-9b7d0791c05e?q=80&w=800',
    category: 'Peripherals',
    specs: ['25K DPI Sensor', '70hr Battery', '58g Weight', 'USB-C Charging'],
  },
  {
    id: 'tablet-creative',
    name: 'Canvas Pro 12.9',
    description:
      'Professional tablet with a stunning Liquid Retina display and stylus support.',
    price: 1099,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800',
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
      'Professional-grade 4K webcam with AI auto-framing and low-light correction.',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1588515724527-074a7a59f35c?q=80&w=800',
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
      'Premium smart speaker with 360-degree room-filling sound and voice assistant.',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800',
    category: 'Audio',
    specs: [
      '360° Sound',
      'Wi-Fi 6 + BT 5.3',
      'Voice Assistant',
      'Multi-room Sync',
    ],
  },

  // --- NEW PRODUCTS (13-50) ---
  {
    id: 'cpu-core-i9',
    name: 'Intel Core i9-14900K',
    description:
      'The pinnacle of desktop processing power with 24 cores and 6.0GHz boost clock.',
    price: 589,
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800',
    category: 'Components',
    badge: 'Flagship',
    specs: ['24 Cores / 32 Threads', '6.0 GHz Boost', '36MB Cache', 'LGA 1700'],
  },
  {
    id: 'laptop-gaming-thin',
    name: 'Razer Blade 14',
    description:
      'Ultra-portable gaming laptop featuring the Ryzen 9 and RTX 4070 in a slim chassis.',
    price: 2399,
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800',
    category: 'Laptops',
    specs: ['14" QHD 240Hz', 'Ryzen 9 7940HS', '16GB DDR5', 'RTX 4070'],
    featured: true,
  },
  {
    id: 'earbuds-anc',
    name: 'Sonic Buds X2',
    description:
      'True wireless earbuds with active noise cancellation and transparency mode.',
    price: 199,
    originalPrice: 249,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800',
    category: 'Audio',
    badge: 'Sale',
    specs: ['6hr Battery', 'Wireless Charging', 'IPX4 Water Resist', 'ANC'],
  },
  {
    id: 'watch-smart-v3',
    name: 'Titan Smart Watch',
    description:
      'Rugged smartwatch with GPS, heart rate monitoring, and 10-day battery life.',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    category: 'Wearables',
    specs: [
      'OLED Always-on',
      'Blood Oxygen Sensor',
      '5ATM Water Resist',
      'GPS',
    ],
  },
  {
    id: 'camera-mirrorless',
    name: 'Lumix S5 II',
    description:
      'Full-frame mirrorless camera optimized for both high-end video and photography.',
    price: 1999,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800',
    category: 'Cameras',
    badge: 'Pro Choice',
    specs: [
      '24.2MP Full Frame',
      '6K Video',
      'Phase Hybrid AF',
      'Dual Native ISO',
    ],
  },
  {
    id: 'mic-streaming',
    name: 'Vocalis Pro USB Mic',
    description:
      'Cardioid condenser microphone designed for streamers and podcasters.',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800',
    category: 'Audio',
    specs: [
      '24-bit/96kHz',
      'Gain Control',
      'Mute Button',
      'Pop Filter Included',
    ],
  },
  {
    id: 'router-wifi7',
    name: 'NetSpeed Mesh Wi-Fi 7',
    description:
      'The future of home networking with lightning-fast Wi-Fi 7 speeds and mesh coverage.',
    price: 449,
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800',
    category: 'Networking',
    badge: 'New',
    specs: ['Tri-band 19Gbps', '6GHz Band Support', '2.5G WAN/LAN', 'AI QoS'],
  },
  {
    id: 'chair-gaming-erg',
    name: 'Titan Ergonomic Chair',
    description:
      'Full-back ergonomic chair with adjustable lumbar support and magnetic pillows.',
    price: 549,
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800',
    category: 'Gaming',
    specs: [
      'Cold-cure Foam',
      '4D Armrests',
      'Magnetic Pillow',
      'XL Size Available',
    ],
  },
  {
    id: 'gpu-rx-7900',
    name: 'Radeon RX 7900 XTX',
    description:
      'AMD flagship graphics card with RDNA 3 architecture for exceptional 4K gaming.',
    price: 949,
    image:
      'https://images.unsplash.com/photo-1587202377425-8b6ae3a3c1a8?q=80&w=800',
    category: 'Components',
    specs: ['24GB GDDR6', 'DisplayPort 2.1', 'RDNA 3', '355W TBP'],
  },
  {
    id: 'monitor-portable',
    name: 'Flex 15" Portable Screen',
    description:
      'Ultra-thin USB-C portable monitor for dual-screen productivity on the go.',
    price: 249,
    image:
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800',
    category: 'Displays',
    specs: ['15.6" IPS FHD', 'USB-C / Mini HDMI', 'Dual Speakers', '300 Nits'],
  },
  {
    id: 'keyboard-low-profile',
    name: 'SlimType Wireless',
    description:
      'Ultra-thin mechanical keyboard with low-profile switches and multi-device pairing.',
    price: 159,
    image:
      'https://images.unsplash.com/photo-1567924675637-283a6742993e?q=80&w=800',
    category: 'Peripherals',
    specs: [
      'Low Profile Red',
      'Bluetooth 5.1',
      'White Backlight',
      '100hr Battery',
    ],
  },
  {
    id: 'ram-ddr5-64gb',
    name: 'Vortex RGB 64GB DDR5',
    description:
      'High-speed 6400MHz memory kit with customizable RGB lighting and heat spreaders.',
    price: 219,
    image:
      'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=800',
    category: 'Components',
    specs: ['64GB (2x32GB)', '6400MHz CL32', 'XMP 3.0 Support', 'RGB Sync'],
  },
  {
    id: 'vr-headset-gen2',
    name: 'Vision VR Elite',
    description:
      'Standalone VR headset with 4K per-eye resolution and hand tracking.',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800',
    category: 'Gaming',
    badge: 'Innovation',
    specs: ['4K Per Eye', 'Snapdragon XR2+', 'Hand Tracking', '90Hz Refresh'],
  },
  {
    id: 'drone-mini-4k',
    name: 'SkyView Mini Pro',
    description: 'Sub-249g drone with 4K HDR video and obstacle sensing.',
    price: 749,
    image:
      'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=800',
    category: 'Gadgets',
    specs: [
      '4K @ 60fps',
      '34min Flight Time',
      'Vertical Shooting',
      'GPS Return',
    ],
  },
  {
    id: 'case-mid-tower',
    name: 'Obsidian Flow PC Case',
    description:
      'High-airflow mid-tower case with three pre-installed PWM fans and glass side panel.',
    price: 139,
    image:
      'https://images.unsplash.com/photo-1587202377425-8b6ae3a3c1a8?q=80&w=800',
    category: 'Components',
    specs: [
      'E-ATX Support',
      '4x 140mm Fans',
      'Cable Management Pro',
      'USB-C Front',
    ],
  },
  {
    id: 'power-bank-high',
    name: 'VoltMax 140W Power Bank',
    description:
      '25,000mAh portable charger with PD 3.1 140W fast charging for laptops.',
    price: 159,
    image:
      'https://images.unsplash.com/photo-1609592806457-9388f63567b5?q=80&w=800',
    category: 'Gadgets',
    specs: ['25000mAh', '140W USB-C PD', 'OLED Status Screen', '3-port Output'],
  },
  {
    id: 'phone-mid-range',
    name: 'Nexus X 5G',
    description:
      'Excellent performance and camera quality at a competitive price point.',
    price: 599,
    originalPrice: 649,
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800',
    category: 'Phones',
    specs: ['6.5" OLED 90Hz', '128GB Storage', '64MP Main Camera', '4500mAh'],
  },
  {
    id: 'soundbar-cinema',
    name: 'Atmos Surround Soundbar',
    description: '5.1.2 channel Dolby Atmos soundbar with wireless subwoofer.',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800',
    category: 'Audio',
    badge: 'Popular',
    specs: ['Dolby Atmos', 'HDMI eARC', 'Wireless Sub', 'Chromecast Built-in'],
  },
  {
    id: 'desk-standing-pro',
    name: 'Apex Motorized Desk',
    description:
      'Sit-stand desk with dual motors and programmable height presets.',
    price: 449,
    image:
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800',
    category: 'Furniture',
    specs: ['Dual Motors', 'Bamboo Top', '350lbs Capacity', 'Memory Controls'],
  },
  {
    id: 'hdd-nas-8tb',
    name: 'IronDrive NAS 8TB',
    description:
      'High-reliability NAS hard drive for 24/7 operation and RAID setups.',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1531492746076-1a1bd9bd2fc2?q=80&w=800',
    category: 'Storage',
    specs: ['7200 RPM', '256MB Cache', 'CMR Technology', '3yr Warranty'],
  },
  {
    id: 'camera-action-4k',
    name: 'ActionCam Pro 5',
    description:
      'Rugged, waterproof action camera with superior stabilization.',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=800',
    category: 'Cameras',
    badge: 'New',
    specs: ['5.3K Video', 'HyperSmooth 6.0', '10m Waterproof', 'Touchscreen'],
  },
  {
    id: 'cpu-cooler-aio',
    name: 'FrostFlow 360mm AIO',
    description:
      'Triple fan liquid cooler with customizable LCD display on the pump.',
    price: 189,
    image:
      'https://images.unsplash.com/photo-1587202377425-8b6ae3a3c1a8?q=80&w=800',
    category: 'Components',
    specs: [
      '360mm Radiator',
      'LCD Pump Screen',
      'ARGB Fans',
      'Socket AM5/1700',
    ],
  },
  {
    id: 'controller-pro-wireless',
    name: 'Apex Elite Controller',
    description:
      'Pro-grade controller with back paddles and adjustable trigger stops.',
    price: 179,
    image:
      'https://images.unsplash.com/photo-1600080972464-8e5f35802446?q=80&w=800',
    category: 'Gaming',
    specs: [
      'Hall Effect Sticks',
      'Back Paddles',
      'USB-C Charging',
      'PC/Console',
    ],
  },
  {
    id: 'projector-4k-home',
    name: 'CinemaView 4K Laser',
    description:
      'Ultra short throw 4K laser projector for massive screens in small rooms.',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=800',
    category: 'Displays',
    specs: ['4K Resolution', '2500 Lumens', '150" Max Size', 'Android TV'],
  },
  {
    id: 'streaming-deck',
    name: 'LogicDeck 15-Key',
    description:
      'Customizable tactile buttons for streaming and workflow automation.',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=800',
    category: 'Peripherals',
    specs: [
      '15 LCD Keys',
      'Visual Feedback',
      'OBS/Twitch Integration',
      'USB 3.0',
    ],
  },
  {
    id: 'mousepad-xl-rgb',
    name: 'GlowSurface XL Pad',
    description:
      'Extended mousepad with water-resistant coating and RGB border.',
    price: 49,
    image:
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800',
    category: 'Peripherals',
    specs: [
      '900x400mm',
      '16.8M RGB Colors',
      'Anti-fray Stitch',
      'Micro-textured',
    ],
  },
  {
    id: 'laptop-entry',
    name: 'LiteBook 14 Air',
    description: 'Perfect for students and office work with long battery life.',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800',
    category: 'Laptops',
    specs: ['14" FHD', '8GB RAM', '512GB SSD', '12hr Battery'],
  },
  {
    id: 'headphones-wired-audiophile',
    name: 'PureSound Open-Back',
    description:
      'Professional open-back studio headphones for precise audio monitoring.',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800',
    category: 'Audio',
    specs: [
      'Open-Back Design',
      '250 Ohm Impedance',
      'Coiled Cable',
      'Velour Pads',
    ],
  },
  {
    id: 'storage-external-4tb',
    name: 'RoughDrive 4TB SSD',
    description: 'Drop-proof and waterproof external SSD for rugged workflows.',
    price: 329,
    image:
      'https://images.unsplash.com/photo-1531492746076-1a1bd9bd2fc2?q=80&w=800',
    category: 'Storage',
    badge: 'Sale',
    specs: [
      'IP65 Rated',
      '2000MB/s Read',
      'USB-C 3.2 Gen2x2',
      'AES Encryption',
    ],
  },
  {
    id: 'tablet-mini',
    name: 'PocketTab 8',
    description: 'Compact 8-inch tablet perfect for reading and casual gaming.',
    price: 349,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800',
    category: 'Tablets',
    specs: ['8.3" Liquid Retina', 'A15 Bionic', 'USB-C', 'Wi-Fi 6'],
  },
  {
    id: 'mic-boom-arm',
    name: 'StudioPro Boom Arm',
    description:
      'Internal spring-loaded microphone boom arm for professional desks.',
    price: 99,
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800',
    category: 'Audio',
    specs: [
      '360° Rotation',
      'Internal Springs',
      'XLR Management',
      'C-Clamp Mount',
    ],
  },
  {
    id: 'gpu-bracket-rgb',
    name: 'Luminous GPU Support',
    description: 'Prevent GPU sag with this stylish ARGB bracket.',
    price: 29,
    image:
      'https://images.unsplash.com/photo-1587202377425-8b6ae3a3c1a8?q=80&w=800',
    category: 'Components',
    specs: [
      'Universal Support',
      '3-pin ARGB',
      'Magnetic Base',
      'Tool-less Design',
    ],
  },
  {
    id: 'ups-1500va',
    name: 'SafeGuard UPS 1500VA',
    description:
      'Uninterruptible power supply with battery backup and surge protection.',
    price: 229,
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800',
    category: 'Gadgets',
    specs: ['1500VA / 900W', 'LCD Display', '10 Outlets', 'AVR Correction'],
  },
  {
    id: 'printer-3d-entry',
    name: 'Forge 3D Printer',
    description:
      'Auto-leveling 3D printer perfect for hobbyists and beginners.',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800',
    category: 'Gadgets',
    specs: ['Auto-Leveling', 'Touchscreen', 'Quiet Motherboard', 'PLA/PETG'],
  },
  {
    id: 'smart-plug-4pack',
    name: 'EchoLink Smart Plug (4 Pack)',
    description:
      'Control your home appliances via smartphone or voice control.',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df8d7?q=80&w=800',
    category: 'Smart Home',
    specs: [
      'Energy Monitoring',
      'Scheduling',
      'Alexa/Google Home',
      'No Hub Required',
    ],
  },
  {
    id: 'webcam-privacy',
    name: 'PrivateLens FHD',
    description: 'Full HD webcam with a built-in physical privacy shutter.',
    price: 79,
    image:
      'https://images.unsplash.com/photo-1588515724527-074a7a59f35c?q=80&w=800',
    category: 'Peripherals',
    specs: ['1080p 60fps', 'Dual Mic', 'Privacy Cover', 'Auto-focus'],
  },
  {
    id: 'case-fan-pack',
    name: 'Cyclone RGB 3-Pack',
    description:
      '120mm PWM fans with vibrant lighting and high static pressure.',
    price: 59,
    image:
      'https://images.unsplash.com/photo-1587202377425-8b6ae3a3c1a8?q=80&w=800',
    category: 'Components',
    specs: ['120mm PWM', 'ARGB Ring', '1800 RPM Max', 'Rubber Mounts'],
  },
  {
    id: 'gaming-headset-wireless',
    name: 'Sonic Surge 7.1',
    description:
      'Low-latency wireless gaming headset with virtual surround sound.',
    price: 149,
    image:
      'https://images.unsplash.com/photo-1599666505317-7bd144c1112b?q=80&w=800',
    category: 'Audio',
    specs: [
      '2.4GHz Wireless',
      'Detachable Mic',
      '7.1 Surround',
      '50mm Drivers',
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
