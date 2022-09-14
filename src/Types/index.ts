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
    courseId: number
    courseName: string
    status: string
    next?: RenderCourseProps[]
    setChildReady: (value: boolean) => void
}

export {
    modeType,
}

export type {
    NavigateProps,
}