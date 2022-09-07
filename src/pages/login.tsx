// import Login from "../components/Login";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = dynamic(() => import('../components/Login'), { suspense: true });

const LoginPage = () => {
    return (
        <main
            className="main-bg"
        >
            <ThemeToggle />
            <Suspense fallback={<LoadingSpinner />}>
                <Login />
            </Suspense>
        </main>
    )
}

export default LoginPage;