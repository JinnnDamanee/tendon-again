// import Login from "../components/Login";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = dynamic(() => import('../components/Login'), { suspense: true });

const LoginPage = () => {
    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden"
        >
            <ThemeToggle />
            <Suspense fallback={<LoadingSpinner />}>
                <Login />
            </Suspense>
        </main>
    )
}

export default LoginPage;