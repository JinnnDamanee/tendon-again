import LoadingSpinner from "@components/baseComponents/LoadingSpinner";
import MainLayout from "@components/layout/MainLayout";
import LessonNode from "@components/learningNode";
import { mockLearningNode } from "@customTypes/mockData";
import { LearningNode } from "@customTypes/tendonAPItype";
import { useBreadCrumb } from "context/breadCrumb";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { Fa500Px } from "react-icons/fa";

// Fetch Learning Node Data
const getLearningNodeById = (id: string): LearningNode => {
    return mockLearningNode;
}

const Lesson = () => {
    const router = useRouter();
    const nodeId = router.query.nodeId ? router.query.nodeId.toString() : "";
    const { pathList, setPathList } = useBreadCrumb()

    useEffect(() => {
        setPathList((prev) => {
            if (prev.length != 0) {
                return [
                    ...prev,
                    {
                        name: mockLearningNode.attributes?.learningNodeName || 'Error',
                        link: 'มีไปก็กดไม่ได้ (ตาม Usecase)',
                    }
                ]
            } else {
                return [
                    {
                        name: 'Dashboard',
                        link: '/',
                    },
                    {
                        name: mockLearningNode.attributes?.learningNodeName || 'Error',
                        link: 'มีไปก็กดไม่ได้ (ตาม Usecase)',
                    }
                ]
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <MainLayout>
            <Suspense fallback={<LoadingSpinner />}>
                <LessonNode
                    LearningNodeData={getLearningNodeById(nodeId)}
                />
            </Suspense>
        </MainLayout>
    )
}

export default Lesson;