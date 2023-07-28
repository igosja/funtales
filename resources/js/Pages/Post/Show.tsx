import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import CommentForm from "@/Pages/Comment/Partials/CommentForm";

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
                                <td>
                                    {post.rating}
                                    <Link href={route('rating-post.store', {post_id: post.id, value: 1})} method="put"
                                          as="button">
                                        +
                                    </Link>
                                    <Link href={route('rating-post.store', {post_id: post.id, value: -1})} method="put"
                                          as="button">
                                        -
                                    </Link>
                                </td>
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
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {post.comments?.map(({id, created_at, created_by, rating, text}) => (
                        <div>
                            <div>{text}</div>
                            <div>Created by: {created_by}</div>
                            <div>Created at: {created_at}</div>
                            <div>{text}</div>
                            <div>
                                Rating: {rating}
                                <Link href={route('rating-comment.store', {comment_id: id, value: 1})} method="put"
                                      as="button">
                                    +
                                </Link>
                                <Link href={route('rating-comment.store', {comment_id: id, value: -1})} method="put"
                                      as="button">
                                    -
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <CommentForm
                            post={post}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
