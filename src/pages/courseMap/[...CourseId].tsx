import { useRouter } from "next/router";
// import CourseMap from "../../components/CourseMap";
import ThemeToggle from "../../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import BreadCrumbNav from "../../components/CourseMap/BreadCrumbNav";
import { CourseProvider } from "../../components/CourseMap/CourseManager";

const CourseMap = dynamic(() => import("../../components/CourseMap"));

const CoursePage = () => {
    const router = useRouter();
    const { CourseId } = router.query;
    return (
        // dark backdrop
        <CourseProvider>
            <main className="main-bg">
                <ThemeToggle />
                <BreadCrumbNav />
                <Suspense fallback={<LoadingSpinner />}>
                    <CourseMap courseId={Number(CourseId)} />
                </Suspense>
            </main>
        </CourseProvider>
    )
}
export default CoursePage;