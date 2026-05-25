import { DataTable } from "@/components/datatable/data-table";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, LaravelPaginator, User } from "@/types";
import { Head } from "@inertiajs/react";
import { columns } from "./columns";
import test from "@/routes/test";
import { index } from "@/actions/App/Http/Controllers/TestController";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Props {
    users: LaravelPaginator<User>
}

export default function TestPage({ users }: Props) {
    return (
        <>
            <Head title='' />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <DataTable key={`${users.current_page}-${users.per_page}`} columns={columns} paginator={users} action={index}/>
            </div>
        </>
    )
};