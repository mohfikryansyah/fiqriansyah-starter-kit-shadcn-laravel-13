'use client';

import {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import { router } from '@inertiajs/react';
import { LaravelPaginator } from '@/types';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    paginator: LaravelPaginator<TData>;
    action: { url: () => string };
    children?: React.ReactNode;
    columnFilter?: string;
    titleFilter?: string;
    optionsFilter?: {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
    }[];
    showToolbar?: boolean;
}

export function DataTable<TData, TValue>({
    columns,
    paginator,
    action,
    columnFilter,
    titleFilter,
    optionsFilter,
    children,
    showToolbar = true,
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: paginator.current_page - 1,
        pageSize: paginator.per_page,
    });

    const searchParams = new URLSearchParams(window.location.search);

    const [search, setSearch] = React.useState(
        searchParams.get('search') ?? '',
    );

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            router.get(
                action.url(),
                {
                    search: search || undefined,
                    page: 1,
                    per_page: pagination.pageSize,
                },
                { preserveState: true, preserveScroll: true, replace: true },
            );
        }, 400);

        return () => clearTimeout(timeout);
    }, [search]);

    React.useEffect(() => {
        setPagination({
            pageIndex: paginator.current_page - 1,
            pageSize: paginator.per_page,
        });
    }, [paginator.current_page, paginator.per_page]);

    const table = useReactTable({
        data: paginator.data,
        columns,
        pageCount: paginator.last_page,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            pagination,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: (updater) => {
            const next =
                typeof updater === 'function' ? updater(pagination) : updater;
            router.get(
                action.url(),
                {
                    page: next.pageIndex + 1,
                    per_page: next.pageSize,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    replace: true,
                },
            );
        },
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <div className="space-y-4">
            {showToolbar && (
                <DataTableToolbar
                    table={table}
                    optionsFilter={optionsFilter}
                    titleFilter={titleFilter}
                    columnFilter={columnFilter}
                    search={search}
                    onSearchChange={setSearch}
                >
                    {children}
                </DataTableToolbar>
            )}
            <div className="overflow-hidden rounded-xl">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="bg-primary text-white hover:bg-primary/90"
                            >
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            className="text-white"
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                    className="odd:bg-white even:bg-slate-50 hover:bg-yellow-50 dark:bg-neutral-800 dark:hover:bg-slate-800/50"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Tidak ada data yang ditemukan.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </div>
    );
}
