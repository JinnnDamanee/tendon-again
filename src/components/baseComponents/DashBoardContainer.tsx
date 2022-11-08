import { modeType } from 'customTypes'
import { motion } from 'framer-motion'
import { useRef } from 'react'

type DashBoardContainerProp = {
    children: React.ReactNode,
    mode: modeType
}
const DashBoardContainer = ({ children, mode }: DashBoardContainerProp) => {
    const dashboardRef = useRef(null)
    return (
        <motion.main className={`flex gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl min-h-[500px]`}
            key={'dashboard'}
            initial={{ opacity: 1, y: -100, scale: 0 }}
            animate={{
                opacity: 1, y: 0, scale: 1,
                // width: width === 0 ? '100%' : width
                width: mode === modeType.main ? '728px' : '344px'
            }}
            exit={{ opacity: 1, y: -100, scale: 0 }}
            drag={mode === modeType.main ? false : true}
            id='dashboard'
            ref={dashboardRef}
            dragConstraints={dashboardRef}
        >
            {children}
        </motion.main>
    )
}
// const DashBoardContainer = forwardRef<HTMLElement, DashBoardContainerProp>(({ children, mode }, dashboardRef) => {
//     return (
//         <motion.main className={`flex gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl min-h-[500px]`}
//             key={'dashboard'}
//             initial={{ opacity: 1, y: -100, scale: 0 }}
//             animate={{
//                 opacity: 1, y: 0, scale: 1,
//                 // width: width === 0 ? '100%' : width
//                 width: mode === modeType.main ? '728px' : '344px'
//             }}
//             exit={{ opacity: 1, y: -100, scale: 0 }}
//             drag={mode === modeType.main ? false : true}
//             id='dashboard'
//             ref={dashboardRef}
//         // dragConstraints={dashboardRef}
//         >
//             {children}
//         </motion.main>
//     )
// })
// DashBoardContainer.displayName = 'DashBoardContainer'
export default DashBoardContainer