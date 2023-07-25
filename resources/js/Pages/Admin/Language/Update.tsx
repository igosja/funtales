import AdminLayout from '@/Layouts/AdminLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';
import LanguageForm from "@/Pages/Admin/Language/Partials/LanguageForm";

export default function Update({auth, language}: PageProps) {
    return (
        <AdminLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update language</h2>}
        >
            <Head title="Admin"/>

            <Link href={route('admin.language.index')}>
                List
            </Link>
            <Link href={route('admin.language.show', {language: language})}>
                View
            </Link>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <LanguageForm
                            language={language}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
