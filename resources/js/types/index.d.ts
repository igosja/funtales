export interface Language {
    id: number;
    code: string;
    created_at: number;
    name: string;
    is_active: boolean;
    updated_at: number;
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
};

export type LanguageListProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    languages: Language[];
};
