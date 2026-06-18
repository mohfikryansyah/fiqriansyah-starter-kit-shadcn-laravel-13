import { Link, usePage } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';
import { ShoppingBag } from 'lucide-react';

export default function AuthSplitLayout({
    children,
    title,
    description,
    sideInfo,
}: AuthLayoutProps) {
    const { name } = usePage().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col items-center justify-center bg-primary p-10 text-white lg:flex dark:border-r">
                {/* <div className="absolute inset-0 bg-primary" /> */}
                {/* <Link
                    href={home()}
                    className="relative z-20 flex items-center text-lg font-medium"
                >
                    <AppLogoIcon className="mr-2 size-8 fill-current text-white" />
                    {name}
                </Link> */}
                <div className="max-w-md text-center text-white">
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20">
                        {sideInfo?.icon || (
                            <AppLogoIcon className="h-10 fill-current sm:h-12" />
                        )}
                    </div>
                    <h2 className="mb-4 text-3xl font-bold">
                        {sideInfo?.title || 'Selamat Datang di ' + name}
                    </h2>
                    <p className="text-lg opacity-90">
                        {sideInfo?.description ||
                            'Aplikasi kasir modern untuk bisnis Anda. Kelola transaksi dengan mudah, pantau laporan real-time, dan tingkatkan efisiensi operasional Anda.'}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {sideInfo?.fitur
                            ? sideInfo.fitur.map((fitur, index) => (
                                  <span
                                      key={index}
                                      className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium"
                                  >
                                      {fitur}
                                  </span>
                              ))
                            : null}
                    </div>
                </div>
            </div>
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-100">
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center"
                    >
                        <AppLogoIcon className="h-10 fill-current text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left">
                        <h1 className="text-xl font-medium">{title}</h1>
                        <p className="text-sm text-balance text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
