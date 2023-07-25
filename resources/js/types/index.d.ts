export interface Language {
    id: number;
    code: string;
    created_at: number;
    name: string;
    is_active: boolean;
    updated_at: number;
}

export interface Log {
    id: number;
    channel: string;
    context: string;
    created_at: string;
    datetime: string;
    extra: string;
    level: number;
    level_name: string;
    message: string;
    unix_time: number;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    language: Language;
    languages: Language[];
    log: Log;
    logs: Log[];
};
