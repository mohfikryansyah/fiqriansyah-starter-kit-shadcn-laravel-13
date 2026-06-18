import { useAuthorization } from '@/hooks/use-authorization';
import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export default function hasAnyPermission(
    permissions: string[],
    givenPermissions?: Record<string, boolean> | null,
): boolean {
    const { canAny, isSuperAdmin } = useAuthorization();

    if (givenPermissions) {
        return (
            isSuperAdmin() ||
            permissions.some(
                (permission) => givenPermissions[permission] === true,
            )
        );
    }

    return canAny(permissions);
}
