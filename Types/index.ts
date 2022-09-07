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

export {
    modeType,
}

export type {
    NavigateProps,
}