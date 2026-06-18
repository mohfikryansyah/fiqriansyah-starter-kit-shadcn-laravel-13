export interface LaravelPaginator<TData> {
    data: TData[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
        page: number;
    }[];
    path: string;
}