import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from '../components/PrivateRoute';
import ArticleIndexPage from "../pages/article/ArticleIndexPage";
import ArticleViewPage from "../pages/article/ArticleViewPage";
import ErrorPage from "../pages/site/ErrorPage";
import LoginPage from "../pages/site/LoginPage";
import LogoutPage from "../pages/site/LogoutPage";
import AdminPage from "../pages/AdminPage";

const useRoutes = () => {
    return (
        <Routes>
            <Route index element={<ArticleIndexPage/>}/>
            <Route path="/" element={<ArticleIndexPage/>}/>
            <Route path="/article/:id" element={<ArticleViewPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>

            <Route element={<PrivateRoute/>}>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
            </Route>

        </Routes>
    )
}

export default useRoutes
