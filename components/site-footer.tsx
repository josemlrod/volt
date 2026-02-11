import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'Components', href: '/?category=Components' },
      { label: 'Phones', href: '/?category=Phones' },
      { label: 'Gaming', href: '/?category=Gaming' },
      { label: 'Laptops', href: '/?category=Laptops' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '#' },
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className='border-t border-border/40 bg-background'>
      <div className='mx-auto max-w-7xl px-4 py-12 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div>
            <Link href='/' className='text-lg font-semibold tracking-tight'>
              VOLT
            </Link>
            <p className='mt-3 text-sm text-muted-foreground leading-relaxed'>
              Premium technology, delivered.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className='text-sm font-semibold'>{group.title}</h4>
              <ul className='mt-3 flex flex-col gap-2'>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className='my-8' />
        <p className='text-xs text-muted-foreground'>
          2026 VOLT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
