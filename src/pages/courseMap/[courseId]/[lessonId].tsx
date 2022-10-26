import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/Layout/MainLayout";
import { useRouter } from "next/router";
import { Suspense } from "react";

const Lesson = () => {
    const router = useRouter();
    const { lessonId } = router.query;
    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <h1>Lesson {lessonId}</h1>
            </Suspense>
        </MainLayout>
    )
}

export default Lesson;