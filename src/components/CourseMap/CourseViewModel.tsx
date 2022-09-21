import { useEffect, useState } from "react";
import { CourseNodeProps, RenderCourseProps } from "../../Types";
const { v4: uuidv4 } = require('uuid');
/*
    View Model
*/
export const setArrowReady = () => {

}



export const usePrepNode = (
    courseNodes: CourseNodeProps,
    setChildReady: (value: boolean) => void): RenderCourseProps[] => {

    const [nodeHistory, setNodeHistory] = useState<number[]>([])
    const [outputNode, setOutputNode] = useState<RenderCourseProps[]>([])

    useEffect(() => {
        courseNodes.next?.map(node => {
            setOutputNode(prev => [...prev, mapToRenderProps(node, setChildReady)])
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mapToRenderProps = (node: CourseNodeProps, setChildReady: (value: boolean) => void): RenderCourseProps => {

        let isShouldRender;

        if (nodeHistory.includes(node.courseId)) {
            isShouldRender = false
        } else {
            isShouldRender = true
            setNodeHistory(prev => [...prev, node.courseId])

            // setNodeHistory([...nodeHistory, node.courseId])
        }

        const next: any = node.next === undefined ? undefined : node.next.map(childNode => {
            return mapToRenderProps(childNode, setChildReady)
        })

        const mapNode: RenderCourseProps = {
            // renderId: uuidv4(),
            courseId: node.courseId,
            courseName: node.courseName,
            status: node.status,
            next: next,
            setChildReady: setChildReady,
            isRender: isShouldRender
        }

        // setMappedNodeList([...mappedNodeList, mapNode])

        return mapNode;
    }
    console.log(nodeHistory);

    return outputNode;
}

