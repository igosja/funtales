import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { LanguageListProps } from '@/types';

export default function Index({ auth, languages }: LanguageListProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Languages</h2>}
        >
            <Head title="Admin" />

            <div className="py-12">
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
