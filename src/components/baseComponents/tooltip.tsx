import { ReactNode } from 'react'
// import { motion } from 'framer-motion'

interface ITooltip {
    children: ReactNode;
    title: string;
}

export const Tooltip = ({ children, title }: ITooltip) => {
    return (
        <main
        >
            <div className='tooltip tooltip-right' data-tip={`${title}`}>
                {children}
            </div>
        </main >
    )
}