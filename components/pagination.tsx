'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Field, FieldLabel } from "@/components/ui/field"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
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
    <Pagination className="w-full flex items-center">
      <div className="flex-1" />
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
      <div className="flex flex-1 items-center justify-end gap-4 mr-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
          <Select defaultValue="10" onValueChange={(value) => changePageSize(Number(value))}>
            <SelectTrigger className="w-20" id="select-rows-per-page">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </div>
    </Pagination>
  )
}
