import { IconType } from "react-icons";


enum modeType {
    'main',
    'search',
    'resume'
}
interface NavigateProps {
    Icon: IconType,
    direction: string,
    onClick: () => void,
}
export interface CourseNodeProps {
    courseId: number
    courseName: string
    status: string
    next?: CourseNodeProps[]
}

export interface RenderCourseProps {
    // renderId: number
    courseId: number
    courseName: string
    status: string
    next?: RenderCourseProps[]
    setChildReady: (value: boolean) => void
    isRender: boolean
}

export {
    modeType,
}

export type {
    NavigateProps,
}