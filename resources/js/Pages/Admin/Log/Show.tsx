import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Show({auth, log}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">View log</h2>}
        >
            <Head title="Admin"/>

            <Link href={route('admin.log.index')}>
                List
            </Link>
            <Link href={route('admin.log.destroy', {log: log})} method="delete" as="button">
                Delete
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{log.id}</td>
                            </tr>
                            <tr>
                                <th>message</th>
                                <td>{log.message}</td>
                            </tr>
                            <tr>
                                <th>channel</th>
                                <td>{log.channel}</td>
                            </tr>
                            <tr>
                                <th>level</th>
                                <td>{log.level}</td>
                            </tr>
                            <tr>
                                <th>level_name</th>
                                <td>{log.level_name}</td>
                            </tr>
                            <tr>
                                <th>unix_time</th>
                                <td>{log.unix_time}</td>
                            </tr>
                            <tr>
                                <th>datetime</th>
                                <td>{log.datetime}</td>
                            </tr>
                            <tr>
                                <th>context</th>
                                <td>{JSON.stringify(log.context)}</td>
                            </tr>
                            <tr>
                                <th>extra</th>
                                <td>{log.extra}</td>
                            </tr>
                            <tr>
                                <th>created_at</th>
                                <td>{log.created_at}</td>
                            </tr>
                            <tr>
                                <th>updated_at</th>
                                <td>{log.updated_at}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
