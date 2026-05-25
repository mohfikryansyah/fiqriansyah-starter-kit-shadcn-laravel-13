import { router } from "@inertiajs/react"
import { PaginationState } from "@tanstack/react-table"
import { useCallback } from "react"
// Import action dari Wayfinder — sesuaikan dengan controller Anda

export interface LaravelPaginator<TData> {
  data: TData[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  from: number
  to: number
}

export function useInertiaTable(action: { url: (params?: any) => string }) {
  const onPaginationChange = useCallback(
    (
      updater: PaginationState | ((prev: PaginationState) => PaginationState),
      currentPagination: PaginationState
    ) => {
      const next =
        typeof updater === "function" ? updater(currentPagination) : updater

      router.get(
        action.url(),
        {
          page: next.pageIndex + 1,
          per_page: next.pageSize,
        },
        {
          preserveState: true,
          preserveScroll: true,
          replace: true,
        }
      )
    },
    [action]
  )

  return { onPaginationChange }
}