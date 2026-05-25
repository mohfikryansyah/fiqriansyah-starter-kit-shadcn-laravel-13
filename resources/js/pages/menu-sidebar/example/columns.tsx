import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { User } from '@/types'

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => (
            <div className="font-medium text-muted-foreground">
                {row.original.id}
            </div>
        ),
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => (
            <div className="max-w-[280px] truncate font-medium">
                {row.original.name}
            </div>
        ),
    },
    {
        accessorKey: 'email',
        header: 'Email  ',
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.email}
            </Badge>
        ),
    }
]