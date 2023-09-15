export interface Article {
    id: number;
    comments: Comment[];
    created_at: number;
    created_by: number;
    language_id: number;
    rating: number;
    slug: string;
    title: string;
    text: string;
    updated_at: number;
    updated_by: number;
    views: number;
}

export interface Comment {
    id: number;
    article_id: number;
    created_at: number;
    created_by: number;
    rating: number;
    text: string;
    updated_at: number;
    updated_by: number;
}

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
    created_at: string;
    email: string;
    login: string;
    role: number;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    article: Article;
    articles: Article[];
    auth: {
        user: User;
    };
    language: Language;
    languages: Language[];
    log: Log;
    logs: Log[];
    user: User;
    users: User[];
};
