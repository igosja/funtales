import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import CommentForm from "@/Pages/Comment/Partials/CommentForm";
import MainLayout from "@/Layouts/MainLayout";

export default function Show({auth, article}: PageProps) {
    return (
        <MainLayout
            user={auth.user}
        >
            <Head title="Posts"/>

            <Link href={route('article.index')}>
                List
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{article.id}</td>
                            </tr>
                            <tr>
                                <th>created_at</th>
                                <td>{article.created_at}</td>
                            </tr>
                            <tr>
                                <th>created_by</th>
                                <td>{article.created_by}</td>
                            </tr>
                            <tr>
                                <th>language_id</th>
                                <td>{article.language_id}</td>
                            </tr>
                            <tr>
                                <th>rating</th>
                                <td>
                                    {article.rating}
                                    <Link href={route('rating-article.store', {article_id: article.id, value: 1})}
                                          method="put"
                                          as="button">
                                        +
                                    </Link>
                                    <Link href={route('rating-article.store', {article_id: article.id, value: -1})}
                                          method="put"
                                          as="button">
                                        -
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th>slug</th>
                                <td>{article.slug}</td>
                            </tr>
                            <tr>
                                <th>title</th>
                                <td>{article.title}</td>
                            </tr>
                            <tr>
                                <th>text</th>
                                <td>{article.text}</td>
                            </tr>
                            <tr>
                                <th>updated_at</th>
                                <td>{article.updated_at}</td>
                            </tr>
                            <tr>
                                <th>updated_by</th>
                                <td>{article.updated_by}</td>
                            </tr>
                            <tr>
                                <th>views</th>
                                <td>{article.views}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {article.comments?.map(({id, created_at, created_by, rating, text}) => (
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
                            article={article}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
