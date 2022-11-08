import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ITooltip {
    children: ReactNode;
    title: string;
}

const Tooltip = ({ children, title }: ITooltip) => {
    return (
        <motion.main
        >
            <div className='tooltip tooltip-right' data-tip={`${title}`}>
                {children}
            </div>
        </motion.main >
    )
}
export default Tooltip;