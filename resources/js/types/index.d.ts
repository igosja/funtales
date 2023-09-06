export interface Comment {
    id: number;
    created_at: number;
    created_by: number;
    post_id: number;
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

export interface Post {
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

export interface User {
    id: number;
    created_at: string;
    email: string;
    login: string;
    role: number;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    language: Language;
    languages: Language[];
    log: Log;
    logs: Log[];
    post: Post;
    posts: Post[];
    user: User;
    users: User[];
};
