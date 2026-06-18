import { Post } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Post>[] = [
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
        accessorKey: 'author.name',
        header: 'Author'
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'content',
        header: 'Content',
    }
]