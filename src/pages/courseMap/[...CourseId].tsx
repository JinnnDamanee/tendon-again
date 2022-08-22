import { useRouter } from "next/router";
// import CourseMap from "../../components/CourseMap";
import ThemeToggle from "../../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import BreadCrumbNav from "../../components/CourseMap/BreadCrumbNav";

const CourseMap = dynamic(() => import("../../components/CourseMap"));

const CoursePage = () => {
    const router = useRouter();
    const { CourseId } = router.query;
    return (
        // dark backdrop
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl">
            <ThemeToggle />
            <BreadCrumbNav />
            <Suspense fallback={<LoadingSpinner />}>
                <CourseMap CourseId={Number(CourseId)} />
            </Suspense>
        </main>
    )
}
export default CoursePage;