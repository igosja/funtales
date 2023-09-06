import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Show({auth, user}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View user</h2>}
        >
            <Head title="Admin"/>

            <Link href={route('admin.user.index')}>
                List
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <th>name</th>
                                <td>{user.login}</td>
                            </tr>
                            <tr>
                                <th>email</th>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <th>role</th>
                                <td>{user.role}</td>
                            </tr>
                            <tr>
                                <th>created_at</th>
                                <td>{user.created_at}</td>
                            </tr>
                            <tr>
                                <th>updated_at</th>
                                <td>{user.updated_at}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
