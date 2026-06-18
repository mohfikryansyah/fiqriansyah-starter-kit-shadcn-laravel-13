import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { useState } from 'react';
import { router } from '@inertiajs/react';

interface CustomPaginationProps {
    links: {
        url: string | null;
        label: string;
        active: boolean;
        page: number;
    }[];
    path: string;
    per_page: number;
    current_page: number;
}

export function CustomPagination({
    links,
    path,
    per_page,
    current_page,
}: CustomPaginationProps) {
    const previousLink = links[0];
    const nextLink = links[links.length - 1];
    const pageLinks = links.slice(1, -1);
    return (
        <Pagination>
            <PaginationContent className="gap-1">
                <Select
                    value={per_page.toString()}
                    onValueChange={(value) => {
                        const newPerPage = Number(value);
                        const currentFirstItem =
                            (current_page - 1) * per_page + 1;
                        const newPage = Math.ceil(
                            currentFirstItem / newPerPage,
                        );

                        router.get(
                            path,
                            {
                                per_page: value,
                                page: newPage,
                                search:
                                    new URLSearchParams(
                                        window.location.search,
                                    ).get('search') || '',
                            },
                            {
                                preserveState: true,
                                replace: true,
                            },
                        );
                    }}
                >
                    <SelectTrigger className="h-8 w-18">
                        <SelectValue placeholder="10" />
                    </SelectTrigger>

                    <SelectContent side="top">
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`}>
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {/* Previous */}
                <PaginationItem>
                    <PaginationPrevious
                        href={previousLink.url || '#'}
                        className={cn(
                            'h-9 rounded-xl border border-border bg-background px-4 transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary',
                            !previousLink.url &&
                                'pointer-events-none opacity-40',
                        )}
                    />
                </PaginationItem>

                {pageLinks.map((link, index) => (
                    <PaginationItem key={index}>
                        {link.label.includes('...') ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                href={link.url || '#'}
                                isActive={link.active}
                                className={cn(
                                    'h-9 min-w-9 rounded-xl border border-transparent font-medium transition-all duration-200',
                                    'text-gray-500 hover:border-primary hover:bg-primary/10 hover:text-primary',
                                    link.active &&
                                        'border-primary bg-primary text-white shadow-md hover:bg-primary hover:text-white',
                                )}
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                {/* Next */}
                <PaginationItem>
                    <PaginationNext
                        href={nextLink.url || '#'}
                        className={cn(
                            'h-9 rounded-xl border border-border bg-background px-4 transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary',
                            !nextLink.url && 'pointer-events-none opacity-40',
                        )}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
