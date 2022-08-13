import { useRouter } from "next/router";
import CourseMap from "../../components/CourseMap";
const CoursePage = () => {
    const router = useRouter();
    const { CourseId } = router.query;
    return (
        // dark backdrop
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-dark shadow-2xl">
            <CourseMap
                CourseId={Number(CourseId)}
            />
        </main>
    )
}
export default CoursePage;