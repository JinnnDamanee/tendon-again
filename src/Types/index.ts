import { IconType } from "react-icons";

export enum modeType {
    'main',
    'search',
    'resume'
}
export interface NavigateProps {
    Icon: IconType,
    direction: string,
    onClick: () => void,
}

export enum StatusType {
    'COMPLETED', 'INPROGRESS', 'NOTSTARTED'
}

export interface LearningNodeProps {
    courseId: number
    courseName: string
    status: StatusType
    next?: LearningNodeProps[]
}

export interface RenderLearningNodeProps {
    // renderId: number
    courseId: number
    courseName: string
    status: StatusType
    next?: RenderLearningNodeProps[]
    setChildReady: (value: boolean) => void
    isRender: boolean
}