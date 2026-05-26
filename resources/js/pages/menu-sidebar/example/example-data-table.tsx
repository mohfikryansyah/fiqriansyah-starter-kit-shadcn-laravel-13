import { DataTable } from '@/components/datatable/data-table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, LaravelPaginator, User } from '@/types';
import { Deferred, Head, InfiniteScroll, usePage } from '@inertiajs/react';
import test from '@/routes/test';
import { index } from '@/actions/App/Http/Controllers/TestController';
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useFlashToast } from '@/hooks/use-flash-toast';

TestPage.layout = {
    breadcrumbs: [
        {
            title: 'Example Data Table',
            href: index(),
        },
    ],
};

interface Props {
    users: LaravelPaginator<User>;
}

export default function TestPage({ users }: Props) {
    // useEffect(() => {
    //     if (flash.success) {
    //         toast.success(`${flash.success}`);
    //     }
    // })

    const emailUsers = Array.from(
        new Set(users.data.map((item) => item.email)),
    );

    /**
     * Jika Data dari backend sudah unik, langsung ke kode ini saja tanpa perlu menggunakan Set untuk memastikan keunikannya.
     * const emailUsersOptions = users.data.map((item) => ({
     *     label: item.email,
     *     value: item.email,
     * }));
     *
     * $users = User::distinct()->pluck('email');
     *
     * Disclaimer : ini hanya contoh, karena semua email sudah pasti unik. Gunakan ini pada misalnya Status, Kategori, atau lainnya yang memang memungkinkan adanya duplikasi nilai.
     */

    const emailUsersOptions = emailUsers.map((email) => ({
        label: email,
        value: email,
    }));

    return (
        <>
            <Head title="TEST PAGE" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Card className="not-dark:bg-gray-50">
                    <CardHeader>
                        <CardTitle>Data Table Example</CardTitle>
                        <CardDescription>
                            Contoh deskripsi untuk data table. Anda dapat
                            mengganti ini dengan informasi yang relevan tentang
                            data table yang ditampilkan.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={columns}
                            paginator={users}
                            action={index}
                            titleFilter="Email"
                            columnFilter="email"
                            optionsFilter={emailUsersOptions}
                        >
                            <Button className="not-lg:w-full">
                                Create New
                            </Button>
                        </DataTable>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
