import { CourseNodeProps, RenderCourseProps } from "../../Types";

export const mapToRenderProps = (node: CourseNodeProps, setChildReady: (value: boolean) => void): RenderCourseProps => {

    // looping map next to render props
    const next = node.next === undefined ? undefined : node.next.map(childNode => {
        return mapToRenderProps(childNode, setChildReady)
    })
    return {
        courseId: node.courseId,
        courseName: node.courseName,
        status: node.status,
        next: next,
        setChildReady: setChildReady,
    };
}