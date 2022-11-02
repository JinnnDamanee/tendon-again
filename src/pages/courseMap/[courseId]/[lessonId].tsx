import LearningNode from "@components/baseComponents/LearningNodeMotion";
import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/layout/MainLayout";
import LessonNode from "@components/LessonNode";
import { useRouter } from "next/router";
import { Suspense } from "react";

const Lesson = () => {
    const router = useRouter();
    const { lessonId } = router.query;
    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <LessonNode />
            </Suspense>
        </MainLayout>
    )
}

export default Lesson;