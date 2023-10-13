import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MainLayout from "../layout/MainLayout";

function LogoutPage() {
    const {setAuth} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        setAuth(false)
        navigate('/');
    }, [setAuth, navigate])

    return (
        <MainLayout>
            Logout
        </MainLayout>
    )
}

export default LogoutPage
