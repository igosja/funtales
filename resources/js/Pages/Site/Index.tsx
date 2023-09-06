import MainLayout from '@/Layouts/MainLayout';
import {PageProps} from "@/types";

export default function Index({auth}: PageProps) {
    return (
        <MainLayout
            user={auth.user}
        >
            Main layout page content
        </MainLayout>
    );
}
