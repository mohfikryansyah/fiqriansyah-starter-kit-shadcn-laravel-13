'use client';

import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';
import React from 'react';
import { DataTableFacetedFilter } from './data-table-faceted-filter';

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    children?: React.ReactNode;
    columnFilter?: string;
    titleFilter?: string;
    optionsFilter?: {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
    }[];
    search?: string;
    onSearchChange?: (value: string) => void;
    onReset?: () => void;
}

export function DataTableToolbar<TData>({
    table,
    children,
    columnFilter,
    titleFilter,
    optionsFilter,
    search,
    onSearchChange,
    onReset,
}: DataTableToolbarProps<TData>) {
    'use no memo';
    const isFiltered =
        (search !== undefined && search !== '') ||
        table.getState().columnFilters.length > 0;
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 flex-col items-center not-xl:space-y-2 xl:flex-row xl:space-x-2">
                {search !== undefined && onSearchChange !== undefined && (
                    <Input
                        placeholder="Cari..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full border border-gray-300 bg-gray-50 focus:border-primary focus:ring-2 focus:ring-primary xl:w-62.5 dark:border-neutral-700 dark:bg-neutral-800"
                    />
                )}

                {columnFilter &&
                    optionsFilter &&
                    table.getColumn(columnFilter) && (
                        <DataTableFacetedFilter
                            column={table.getColumn(columnFilter)}
                            title={titleFilter}
                            options={optionsFilter}
                        />
                    )}

                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            onReset?.();
                            table.resetColumnFilters();
                            table.setGlobalFilter('');
                        }}
                        className="w-full px-2 xl:w-fit xl:px-3"
                    >
                        Reset
                        <X />
                    </Button>
                )}
                {children}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}
