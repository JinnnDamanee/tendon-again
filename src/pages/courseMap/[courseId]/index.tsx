import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/layout/MainLayout";
import { MockRelateCourse } from "@data/graphNode";
import { LearningNodeProps, StatusType } from "@customTypes/index";
import { useBreadCrumb } from "context/breadCrumb";
import useLocalStorage from "hooks/useLocalStorage";
import useNavPath from "hooks/useNavPath";

const CourseMap = dynamic(() => import("@components/curriculaMap"));

// Fetch Curriculum Data
const getCurriculaNodeData = (courseId: string): LearningNodeProps => {
    return {
        courseId: courseId,
        courseName: "Introduction to Programming",
        status: StatusType.COMPLETED,
        next: MockRelateCourse
    }
}

const CoursePage = () => {
    const router = useRouter();
    const courseId = router.query.courseId ? router.query.courseId.toString() : "";
    const curriculaData = getCurriculaNodeData(courseId);
    const { pathList, setPathList } = useBreadCrumb()
    const [storedPath, setStoredPath] = useLocalStorage('path', pathList);

    // useNavPath({
    //     page: 'CurriculaNode',
    //     curriculaData: curriculaData,
    //     courseId: courseId
    // })

    useEffect(() => {
        setPathList([
            {
                name: 'Dashboard',
                link: '/',
            },
            {
                name: curriculaData.courseName,
                link: `/courseMap/${courseId}`,
            }
        ])
        setStoredPath(pathList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        // <BreadcrumbProvider>
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <CourseMap learningNodeData={curriculaData} />
            </Suspense>
        </MainLayout>
        // </BreadcrumbProvider>
    )
}
export default CoursePage;