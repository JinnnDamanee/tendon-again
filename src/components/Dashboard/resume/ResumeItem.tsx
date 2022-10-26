import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useXarrow } from 'react-xarrows';
import { resumeProps } from '../../../data';

const ResumeItem = ({ id, courseName, setIsReady }: resumeProps) => {
    const updateArrow = useXarrow();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setIsReady(true), 200)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <motion.button className="p-2 rounded-lg bg-slate-500 dark:bg-gray-normal text-white dark:border-2 dark:border-purple-light dark:shadow-purple-neon shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            id={id.toString()}
            onUpdate={() => {
                setInterval(updateArrow, 100)
            }}
            onClick={() => router.push(`/courseMap/${id}`)}
        >
            {courseName}
        </motion.button>
    )
}
export default ResumeItem;