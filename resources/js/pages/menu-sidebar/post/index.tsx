import { DataTable } from '@/components/datatable/data-table';
import AppLayout from '@/layouts/app-layout';
import { Auth, BreadcrumbItem, LaravelPaginator, Post } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { columns } from './partials/columns';
import { create, index } from '@/actions/App/Http/Controllers/PostController';
import { Button } from '@/components/ui/button';
import { CreatePostDialog } from './create-post-modal';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import postsRoute from '@/routes/posts';
import { useAuthorization } from '@/hooks/use-authorization';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function PostIndex({
    posts,
    modalOpen = false,
}: {
    posts: LaravelPaginator<Post>;
    modalOpen?: boolean;
}) {
    const { canAny } = useAuthorization();

    return (
        <>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Post</CardTitle>
                        <CardDescription>All post</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={columns}
                            paginator={posts}
                            action={postsRoute.index}
                        >
                            <Button className="not-lg:w-full">
                                Create New
                            </Button>
                            {canAny(['example-datatable-create', 'dashboard-access']) && (
                                <Link href={create()}>
                                    <Button>Tambah Post</Button>
                                </Link>
                            )}
                        </DataTable>
                    </CardContent>
                </Card>
                <CreatePostDialog
                    open={modalOpen}
                    onClose={() =>
                        router.visit(index(), { preserveState: true })
                    }
                />
            </div>
        </>
    );
}
