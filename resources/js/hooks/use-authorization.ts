import { Auth } from '@/types/auth';
import { usePage } from '@inertiajs/react';

type Permissions = Record<string, boolean>;

export interface AuthState {
    permissions?: Permissions;
    super?: boolean;
}

export interface ResolvedAuthorizationState {
    permissions: Permissions;
    super: boolean;
}

export function resolveAuthorizationState(
    auth: AuthState = {},
): ResolvedAuthorizationState {
    return {
        permissions: auth.permissions ?? {},
        super: auth.super === true,
    };
}

export function isSuperAdmin(auth: AuthState = {}): boolean {
    return resolveAuthorizationState(auth).super;
}

export function can(permission: string, auth: AuthState = {}): boolean {
    const state = resolveAuthorizationState(auth);

    return state.super || state.permissions[permission] === true;
}

export function canAny(
    permissions: string[] = [],
    auth: AuthState = {},
): boolean {
    if (permissions.length === 0) {
        return false;
    }

    return permissions.some((permission) => can(permission, auth));
}

export function canAll(
    permissions: string[] = [],
    auth: AuthState = {},
): boolean {
    if (permissions.length === 0) {
        return false;
    }

    return permissions.every((permission) => can(permission, auth));
}

export function useAuthorization() {
    const { auth } = usePage<Auth>().props;

    return {
        auth,
        can: (permission: string) => can(permission, auth),
        canAny: (permissions: string[]) => canAny(permissions, auth),
        canAll: (permissions: string[]) => canAll(permissions, auth),
        isSuperAdmin: () => isSuperAdmin(auth),
    };
}
