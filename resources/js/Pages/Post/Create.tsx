import PostForm from './Partials/PostForm';
import {Head, Link} from '@inertiajs/react';
import {PageProps, Post} from '@/types';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Edit({auth, post}: PageProps<{ post: Post }>) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create post</h2>}
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
        </Authenticated>
    );
}
