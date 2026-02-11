'use client';
import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/products';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const featured = getFeaturedProducts().slice(0, 5);

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section className='relative'>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: 'center' }}
        className='w-full'
      >
        <CarouselContent>
          {featured.map((product) => (
            <CarouselItem key={product.id}>
              <div className='relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-secondary/50 px-4 py-20 lg:flex-row lg:px-16'>
                <div className='z-10 flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left'>
                  {product.badge && (
                    <span className='mb-4 inline-block rounded-full bg-foreground px-3 py-1 text-xs font-medium tracking-wide text-background'>
                      {product.badge}
                    </span>
                  )}
                  <h2 className='text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl'>
                    {product.name}
                  </h2>
                  <p className='mt-4 max-w-md text-pretty text-base text-muted-foreground leading-relaxed'>
                    {product.description}
                  </p>
                  <div className='mt-6 flex items-center gap-4'>
                    <span className='text-2xl font-semibold'>
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className='text-lg text-muted-foreground line-through'>
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Link href={`/product/${product.id}`} className='mt-8'>
                    <Button size='lg' className='gap-2 rounded-full px-8'>
                      Shop Now
                      <ArrowRight className='h-4 w-4' />
                    </Button>
                  </Link>
                </div>
                <div className='mt-10 lg:mt-0 lg:ml-16'>
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={500}
                    height={500}
                    className='h-64 w-64 rounded-2xl object-cover md:h-80 md:w-80 lg:h-[420px] lg:w-[420px]'
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3'>
        <Button
          variant='outline'
          size='icon'
          className='h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm'
          onClick={scrollPrev}
        >
          <ChevronLeft className='h-4 w-4' />
          <span className='sr-only'>Previous</span>
        </Button>
        <div className='flex items-center gap-1.5'>
          {featured.map((_, i) => (
            <button
              key={`dot-${featured[i].id}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-6 bg-foreground' : 'w-1.5 bg-foreground/30'
              }`}
              onClick={() => api?.scrollTo(i)}
            >
              <span className='sr-only'>Go to slide {i + 1}</span>
            </button>
          ))}
        </div>
        <Button
          variant='outline'
          size='icon'
          className='h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm'
          onClick={scrollNext}
        >
          <ChevronRight className='h-4 w-4' />
          <span className='sr-only'>Next</span>
        </Button>
      </div>
    </section>
  );
}
