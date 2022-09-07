import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { resumeProps } from '../../../data'
const ResumeList = () => {
    const { theme } = useTheme();
    const [isReady, setIsReady] = useState(false);

    const resumeData: resumeProps[] = [
        {
            id: 1,
            courseName: "Web Development",
            setIsReady: setIsReady,
        },
        {
            id: 2,
            courseName: "Web Development",
            setIsReady: setIsReady,
        },
        {
            id: 3,
            courseName: "Web Development",
            setIsReady: setIsReady,
        },
    ]


    return (
        <motion.main
            className='flex flex-col gap-10 justify-center'
        >
            <Xwrapper>
                {
                    resumeData.map((item, index) => {
                        return (
                            <div key={index}>
                                <ResumeItem key={item.id} {...item} setIsReady={setIsReady} />
                                {
                                    isReady && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <Xarrow
                                                start={'dashboard'}
                                                end={item.id.toString()}
                                                color={theme === 'light' ? '#475569' : '#961EFF'}
                                            />
                                        </motion.div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </Xwrapper>
        </motion.main>
    )
}
const ResumeItem = ({ id, courseName, setIsReady }: resumeProps) => {
    const updateArrow = useXarrow();

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
            onClick={() => Router.push(`/courseMap/${id}`)}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            id={id.toString()}
            onUpdate={() => {
                setInterval(updateArrow, 100)
            }}
        >
            {courseName}
        </motion.button>
    )
}
export default ResumeList;