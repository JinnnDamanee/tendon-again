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

export type LearningNodeProps = {
    courseId: string
    courseName: string
    status: StatusType
    next?: LearningNodeProps[]
}

export interface RenderLearningNodeProps {
    // renderId: number
    courseId: string
    courseName: string
    status: StatusType
    next?: RenderLearningNodeProps[]
    setChildReady: (value: boolean) => void
    isRender: boolean
}

export type resSource = {
    resLink: string
    resType: string
}

// export type Node = {
//     id: string
//     name: string
//     type: "pdfNode" | "videoNode" | "textNode" | "soundNode" | "imageNode"
//     attributes: {
//         priority: "require" | "extension" | "optional";
//         size: number;
//         /** @example "/resources/pdf/1234" */
//         resources: string;
//     };
// }

export * from './mockData'