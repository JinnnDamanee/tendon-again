import { LearningNodeProps } from "@customTypes/index";
import { LearningNode } from "@customTypes/tendonAPItype";
import { useBreadCrumb } from "context";
import { useCallback, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type navPathProp = {
    page: string
    curriculaData?: LearningNodeProps,
    courseId?: string,
    mockLearningNode?: LearningNode
}

const useNavPath = ({ page, courseId, curriculaData, mockLearningNode }: navPathProp) => {
    const { pathList, setPathList } = useBreadCrumb()
    const [storedPath, setStoredPath] = useLocalStorage('path', pathList);

    const pathController = useCallback(() => {
        switch (page) {
            case 'CurriculaMap':
                if (!curriculaData) throw new Error('Curricula Data is undefined');
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
            case 'LearningNode':
                setPathList((prev) => {
                    if (!mockLearningNode) throw new Error('Learning Node is undefined');
                    if (prev.length != 0) {
                        return [
                            ...prev,
                            {
                                name: mockLearningNode.attributes?.learningNodeName || 'Error',
                                link: 'มีไปก็กดไม่ได้ (ตาม Usecase)',
                            }
                        ]
                    } else {    // no previous path
                        return [
                            ...storedPath,
                            {
                                name: mockLearningNode.attributes?.learningNodeName || 'Error',
                                link: 'มีไปก็กดไม่ได้ (ตาม Usecase)',
                            }
                        ]
                    }
                })
        }
    }, [courseId, curriculaData, mockLearningNode, setPathList, storedPath, page])

    useEffect(() => {
        pathController();
        setStoredPath(pathList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathList])
}

export default useNavPath