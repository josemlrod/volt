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
    console.log(page)
    router.push(pathname + '?' + params.toString(), { scroll: false });
  };

  const links = Array.from({ length: totalPages }).map((_, index) => index + 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious  onClick={() =>{
            router.push(`/?page=${Number(currentPage) - 1}&itemsPerPage=${Number(4)}`,{scroll: false})}}  isActive= {Number(currentPage) == 1 || false}/>
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
          <PaginationNext onClick={() =>{
            router.push(`/?page=${Number(currentPage) + 1}&itemsPerPage=${Number(4)}`,{scroll: false})}} isActive= {Number(currentPage) == 5 || false}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

