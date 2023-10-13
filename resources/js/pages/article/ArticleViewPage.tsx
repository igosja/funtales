import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainLayout from "../layout/MainLayout";
import {Link, useParams} from "react-router-dom";

function ArticleViewPage() {
    const url = '/api/articles/';
    const [article, setArticle] = useState({
        id: '',
        created_at: '',
        created_by: '',
        language_id: '',
        rating: '',
        title: '',
        text: '',
        updated_at: '',
        updated_by: '',
        views: ''
    });

    const params = useParams();

    const fetchArticleData = () => {
        axios
            .get(url + params.id)
            .then(data => {
                setArticle(data.data.data)
            });
    };

    useEffect(() => {
        fetchArticleData();
    }, []);

    return (
        <MainLayout>
            <Link to={'/'}>
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
                                    +
                                    -
                                </td>
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
        </MainLayout>
    );
}

export default ArticleViewPage;
