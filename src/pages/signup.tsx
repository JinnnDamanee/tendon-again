import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "@baseComponents/LoadingSpinner";
import MainLayout from "../components/layout/MainLayout";

const Signup = dynamic(() => import('../components/signup'));

const SignupPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <Signup />
            </Suspense>
        </MainLayout>
    )
}

export default SignupPage;