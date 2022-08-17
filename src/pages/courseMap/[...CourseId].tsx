import { useRouter } from "next/router";
import CourseMap from "../../components/CourseMap";
import ThemeToggle from "../../components/ThemeToggle";
const CoursePage = () => {
    const router = useRouter();
    const { CourseId } = router.query;
    return (
        // dark backdrop
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl">
            <ThemeToggle />
            <CourseMap
                CourseId={Number(CourseId)}
            />
        </main>
    )
}
export default CoursePage;