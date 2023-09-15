import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({auth, articles}: PageProps) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Articles</h2>}
        >
            <Head title="Articles"/>

            <div className="py-12">
                <a href={route('article.create')}>
                    Create
                </a>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {articles.map(({created_at, created_by, rating, slug, title, text, views}) => (
                            <div>
                                <div>
                                    <Link href={route('article.show', {slug: slug})}>
                                        {title}
                                    </Link>
                                </div>
                                <div>Created by: {created_by}</div>
                                <div>Created at: {created_at}</div>
                                <div>{text}</div>
                                <div>Rating: {rating}</div>
                                <div>Views: {views}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
