import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Show({auth, post}: PageProps) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View post</h2>}
        >
            <Head title="Posts"/>

            <Link href={route('post.index')}>
                List
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{post.id}</td>
                            </tr>
                            <tr>
                                <th>created_at</th>
                                <td>{post.created_at}</td>
                            </tr>
                            <tr>
                                <th>created_by</th>
                                <td>{post.created_by}</td>
                            </tr>
                            <tr>
                                <th>language_id</th>
                                <td>{post.language_id}</td>
                            </tr>
                            <tr>
                                <th>rating</th>
                                <td>{post.rating}</td>
                            </tr>
                            <tr>
                                <th>slug</th>
                                <td>{post.slug}</td>
                            </tr>
                            <tr>
                                <th>title</th>
                                <td>{post.title}</td>
                            </tr>
                            <tr>
                                <th>text</th>
                                <td>{post.text}</td>
                            </tr>
                            <tr>
                                <th>updated_at</th>
                                <td>{post.updated_at}</td>
                            </tr>
                            <tr>
                                <th>updated_by</th>
                                <td>{post.updated_by}</td>
                            </tr>
                            <tr>
                                <th>views</th>
                                <td>{post.views}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
