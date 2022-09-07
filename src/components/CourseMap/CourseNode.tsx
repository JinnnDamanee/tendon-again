import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useXarrow, Xwrapper } from 'react-xarrows'
import Xarrow from 'react-xarrows'
import { useTheme } from 'next-themes'
import { useCourse } from './CourseManager'

export interface CourseNodeProps {
    CourseId: number
    CourseName: string
    next?: CourseNodeProps[]
    setChildReady: (value: boolean) => void
}


// Dumb component that renders a course node
const CourseNode = ({ CourseId, CourseName, next, setChildReady }: CourseNodeProps) => {
    // use courseId to get the course data from the server
    // but we will mock it for now
    const { theme } = useTheme();
    const updateArrow = useXarrow();
    const [subChildReady, setSubChildReady] = useState(false);
    const { addCourseToMap, isCourseInMap } = useCourse();

    const nodeRef = useRef(null)
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => setChildReady(true), 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <motion.button
                className="course-node"
                id={CourseId.toString()}
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
            >
                <h1>{CourseName}</h1>

                {/* <AnimatePresence
                exitBeforeEnter
                >
                {
                    isOpen && <CourseDetail courseData={courseData} />
                }
            </AnimatePresence> */}

            </motion.button>
            <div className="flex flex-col gap-10">
                <Xwrapper>
                    {
                        next === undefined ? null :
                            next.map(item => {

                                // if (isCourseInMap(item)) {
                                //     addCourseToMap(item);
                                return (
                                    (
                                        <div key={item.CourseId}
                                            className="flex items-center"
                                        >
                                            <CourseNode {...item} setChildReady={setSubChildReady} />
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                {subChildReady &&
                                                    <Xarrow
                                                        start={CourseId.toString()}
                                                        end={item.CourseId.toString()}
                                                        color={theme === 'light' ? '#475569' : '#961EFF'}
                                                    />
                                                }
                                            </motion.div>
                                        </div>
                                    )
                                )
                                // }

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