'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
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
    const page =Number(e.currentTarget.dataset.value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(pathname + '?' + params.toString(), { scroll: false });
    changePage(page);
  };

  const links = Array.from({ length: totalPages }).map((_, index) => index + 1);
  const isFirstPage = Number(currentPage) <= 1;
  const isLastPage = Number(currentPage) >= Number(totalPages);

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(pathname + "?" + params.toString(), { scroll: false });
  };
  
  const changePageSize = (size: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("itemsPerPage", String(size));
    params.set("page", "1");
    router.push(pathname + "?" + params.toString(), { scroll: false });
  };

  return (
    <Pagination>
      <PaginationContent className="justify-center flex-1">
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={isFirstPage}
            className={isFirstPage ? 'pointer-events-none opacity-50' : ''}
            onClick={() =>  !isFirstPage && changePage(Number(currentPage) - 1)}/>
        </PaginationItem>
        {links.map((num) => {
          return (
            <PaginationItem key={num}>
              <PaginationLink
                onClick={setPageNumber}
                data-value={num}
                isActive={Number(currentPage) === num}
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            aria-disabled={isLastPage}
            className={isLastPage ? 'pointer-events-none opacity-50' : ''}
            onClick={() => !isLastPage && changePage(Number(currentPage) + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
