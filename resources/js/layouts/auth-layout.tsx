import AuthLayoutTemplate from '@/layouts/auth/auth-split-layout';
import { ReactNode } from 'react';

export default function AuthLayout({
    title = '',
    description = '',
    children,
    sideInfo,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
    sideInfo?: {
        icon: ReactNode;
        title: string;
        description: string;
        fitur?: string[];
    };
}) {

    console.log(sideInfo);
    return (
        <AuthLayoutTemplate title={title} description={description} sideInfo={sideInfo}>
            {children}
        </AuthLayoutTemplate>
    );
}
