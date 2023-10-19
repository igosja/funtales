import MainLayout from "./layout/MainLayout";
import {useEffect} from "react";
import axios from "axios";

const AdminPage = () => {
    const url = '/api/user';
    const checkToken = () => {
        axios
            .get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(function (error) {
                localStorage.removeItem('access_token');
                console.log(error.response);
            });
    };

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <MainLayout>
            <h1>Admin</h1>
        </MainLayout>
    )
}

export default AdminPage
