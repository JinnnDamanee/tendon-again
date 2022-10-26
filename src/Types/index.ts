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

export enum StatusType {
    'COMPLETED', 'INPROGRESS', 'NOTSTARTED'
}

export interface CourseNodeProps {
    courseId: number
    courseName: string
    status: StatusType
    next?: CourseNodeProps[]
}

export interface RenderCourseProps {
    // renderId: number
    courseId: number
    courseName: string
    status: StatusType
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