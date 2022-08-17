import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Router from 'next/router'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { resumeData, resumeProps } from '../../../data'
const ResumeList = () => {
    const { theme } = useTheme();
    return (
        <motion.main className='flex flex-col gap-10 justify-center'>
            {
                resumeData.map((item, index) => {
                    return (
                        <Xwrapper key={index}>
                            <ResumeItem key={item.id} {...item} />
                            <Xarrow start={'dashboard'} end={item.id.toString()} color={theme === 'light' ? '#475569' : '#961EFF'} />
                        </Xwrapper>
                    )
                })
            }
        </motion.main>
    )
}
const ResumeItem = ({ id, courseName }: resumeProps) => {
    return (
        <motion.button className="p-2 rounded-lg bg-slate-500 dark:bg-gray-normal text-white dark:border-2 dark:border-purple-light dark:shadow-purple-neon shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => Router.push(`/courseMap/${id}`)}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            id={id.toString()}
        >
            {courseName}
        </motion.button>
    )
}
export default ResumeList;