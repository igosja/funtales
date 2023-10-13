import useAuth from "../../hooks/useAuth";
import {useLocation, useNavigate} from 'react-router-dom';
import MainLayout from "../layout/MainLayout";

const LoginPage = () => {
    const {setAuth} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    return (
        <MainLayout>
            <div>Login</div>
            <button
                type={'button'}
                onClick={() => {
                    setAuth(true)
                    navigate(from, {replace: true});
                }}
            >
                Login
            </button>
        </MainLayout>
    )
}

export default LoginPage
