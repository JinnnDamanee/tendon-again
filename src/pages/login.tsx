// import Login from "../components/Login";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";

const Login = dynamic(() => import('../components/Login'), { suspense: true });

const LoginPage = () => {
    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden"
        >
            <ThemeToggle />
            <Login />
        </main>
    )
}

export default LoginPage;