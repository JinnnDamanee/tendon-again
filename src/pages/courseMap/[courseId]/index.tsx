import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/layout/MainLayout";

const CourseMap = dynamic(() => import("@components/LearningNodeMap"));

const CoursePage = () => {
    const router = useRouter();
    const { courseId } = router.query;
    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <CourseMap courseId={Number(courseId)} />
            </Suspense>
        </MainLayout>
    )
}
export default CoursePage;