import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useXarrow, Xwrapper } from 'react-xarrows'
import Xarrow from 'react-xarrows'
import { useTheme } from 'next-themes'
import { RenderCourseProps } from '../../types'
import ArrowBox from '../baseComponents/ArrowBox'
import { nodeStatusColor } from './CourseViewModel'
import { useRouter } from 'next/router'

const CourseNode = ({ courseId, courseName, next, setChildReady, isRender, status }: RenderCourseProps) => {
    const { theme } = useTheme();
    const updateArrow = useXarrow();
    const [subChildReady, setSubChildReady] = useState(false);
    const nodeRef = useRef(null)
    const router = useRouter();


    useEffect(() => {
        setTimeout(() => setChildReady(true), 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const statusColor = useMemo(() => nodeStatusColor(status), [])

    return (
        <>
            {isRender && (
                <div className='indicator'>
                    <span className="indicator-item indicator-start badge mx-10 dark:bg-gray-medium dark:shadow-xl dark:shadow-gray-dark dark:border-0">{["✓", "...", "!"][status]}</span>
                    <motion.button
                        className={`course-node ${statusColor}`}
                        id={courseId.toString()}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1, scale: 1,
                            // height: isOpen ? 'auto' : 'auto',
                        }}
                        ref={nodeRef}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
                        //drag
                        dragConstraints={nodeRef}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        onUpdate={() => {
                            setInterval(updateArrow, 200)
                        }}
                        onClick={() => {
                            router.push(`${router.asPath}/${courseId}`)
                        }}
                    >
                        <h1>{courseName}</h1>
                        {/* <AnimatePresence
                exitBeforeEnter
                >
                {
                    isOpen && <CourseDetail courseData={courseData} />
                }
            </AnimatePresence> */}
                    </motion.button>
                </div>
            )}

            {/* Next Course */}
            <div className="flex flex-col gap-10">
                <Xwrapper>
                    {
                        next === undefined ? null :
                            next.map((item, index) => {
                                // if (!item.isRender) return null;
                                return (
                                    (
                                        <div key={index} className="flex items-center">
                                            <CourseNode
                                                key={item.courseId}
                                                {...item}
                                                setChildReady={setSubChildReady}
                                            />
                                            <ArrowBox>
                                                {subChildReady &&
                                                    <Xarrow
                                                        start={courseId.toString()}
                                                        end={item.courseId.toString()}
                                                        color={theme === 'light' ? '#475569' : '#961EFF'}
                                                    />
                                                }
                                            </ArrowBox>
                                        </div>
                                    )
                                )
                            })
                    }
                </Xwrapper>
            </div>
        </>
    );
}
/*

*/
export default CourseNode;