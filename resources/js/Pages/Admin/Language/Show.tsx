import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Show({auth, language}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View language</h2>}
        >
            <Head title="Admin"/>

            <Link href={route('admin.language.index')}>
                List
            </Link>
            <Link href={route('admin.language.edit', {language: language})}>
                Edit
            </Link>
            <Link href={route('admin.language.destroy', {language: language})} method="delete" as="button">
                Delete
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{language.id}</td>
                            </tr>
                            <tr>
                                <th>Code</th>
                                <td>{language.code}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{language.name}</td>
                            </tr>
                            <tr>
                                <th>Is active</th>
                                <td>{language.is_active}</td>
                            </tr>
                            <tr>
                                <th>Created at</th>
                                <td>{language.created_at}</td>
                            </tr>
                            <tr>
                                <th>Updated at</th>
                                <td>{language.updated_at}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
