import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Index({auth, logs}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Logs</h2>}
        >
            <Head title="Admin"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {logs.map(({id, message, datetime}) => (
                                <tr>
                                    <td>{id}</td>
                                    <td>{message}</td>
                                    <td>{datetime}</td>
                                    <td>
                                        <Link href={route('admin.log.show', {id: id})}>
                                            View
                                        </Link>
                                        <Link href={route('admin.log.destroy', {id: id})} method="delete"
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
