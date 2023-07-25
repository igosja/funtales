import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Index({auth, languages}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Languages</h2>}
        >
            <Head title="Admin"/>

            <div className="py-12">
                <a href={route('admin.language.create')}>
                    Create
                </a>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Is Active</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {languages.map(({ id, code, name, is_active, created_at, updated_at }) => (
                                <tr>
                                    <td>{id}</td>
                                    <td>{code}</td>
                                    <td>{name}</td>
                                    <td>{is_active}</td>
                                    <td>{created_at}</td>
                                    <td>{updated_at}</td>
                                    <td>
                                        <Link href={route('admin.language.show', {id: id})}>
                                            View
                                        </Link>
                                        <Link href={route('admin.language.edit', {id: id})}>
                                            Edit
                                        </Link>
                                        <Link href={route('admin.language.destroy', {id: id})} method="delete"
                                              as="button">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
