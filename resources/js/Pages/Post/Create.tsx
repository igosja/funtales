import PostForm from './Partials/PostForm';
import {Head, Link} from '@inertiajs/react';
import {PageProps, Post} from '@/types';
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({auth, post}: PageProps<{ post: Post }>) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Posts"/>

            <Link href={route('post.index')}>
                List
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <PostForm
                            post={post}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
