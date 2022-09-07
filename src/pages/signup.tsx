// import Signup from "../components/signup";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Signup = dynamic(() => import('../components/signup'));

const SignupPage = () => {
    return (
        <main
            className="main-bg"
        >
            <ThemeToggle />
            <Suspense fallback={<LoadingSpinner />}>
                <Signup />
            </Suspense>
        </main>
    )
}

export default SignupPage;