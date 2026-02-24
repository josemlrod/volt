'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type ProductsPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function ProductsPagination({
  currentPage,
  totalPages,
}: ProductsPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setPageNumber = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const page = e.currentTarget.dataset.value;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));

    router.push(pathname + '?' + params.toString(), { scroll: false });
  };

  const links = Array.from({ length: totalPages }).map((_, index) => index + 1);
  console.log({ links });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        {links.map((num) => {
          return (
            <PaginationItem>
              <PaginationLink
                onClick={setPageNumber}
                data-value={num}
                key={num}
                isActive={Number(currentPage) === num}
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

