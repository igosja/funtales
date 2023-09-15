import ArticleForm from './Partials/ArticleForm';
import {Head, Link} from '@inertiajs/react';
import {Article, PageProps} from '@/types';
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({auth, article}: PageProps<{ article: Article }>) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Articles"/>

            <Link href={route('article.index')}>
                List
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <ArticleForm
                            article={article}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
