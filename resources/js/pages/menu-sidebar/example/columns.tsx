import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types';

export const columns: ColumnDef<User>[] = [
    {
        id: 'rowNumber',
        header: '#',
        cell: ({ row, table }) => {
            const pageIndex = table.getState().pagination.pageIndex;
            const pageSize = table.getState().pagination.pageSize;

            return (
                <div className="font-medium text-muted-foreground">
                    {pageIndex * pageSize + row.index + 1}
                </div>
            );
        },
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => (
            <div className="max-w-70 truncate font-medium">
                {row.original.name}
            </div>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: 'email',
        header: 'Email  ',
        cell: ({ row }) => (
            <Badge variant="outline">{row.original.email}</Badge>
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
];
