import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/layout/MainLayout";
import LessonNode from "@components/learningNode";
import { mockLearningNode } from "@customTypes/mockData";
import { LearningNode } from "@customTypes/tendonAPItype";
import { BreadcrumbProvider, useBreadCrumb } from "context/breadCrumb";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";

// Fetch Learning Node Data
const getLearningNodeById = (id: string): LearningNode => {
    return mockLearningNode;
}

const Lesson = () => {
    const router = useRouter();
    const nodeId = router.query.nodeId ? router.query.nodeId.toString() : "";
    const { pathList, setPathList } = useBreadCrumb()

    useEffect(() => {
        setPathList((prev) => [
            ...prev,
            {
                name: mockLearningNode.attributes?.learningNodeName || 'Error',
                link: 'มีไปก็ไม่ได้กด',
                isActive: false
            }
        ])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        // <BreadcrumbProvider>
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <LessonNode
                    LearningNodeData={getLearningNodeById(nodeId)}
                />
            </Suspense>
        </MainLayout>
        // </BreadcrumbProvider>
    )
}

export default Lesson;