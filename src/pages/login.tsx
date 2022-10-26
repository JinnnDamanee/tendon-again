import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "@baseComponents/LoadingSpinner";
import MainLayout from "@components/Layout/MainLayout";

const Login = dynamic(() => import('../components/Login'), { suspense: true });

const LoginPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <Login />
            </Suspense>
        </MainLayout>
    )
}

export default LoginPage;