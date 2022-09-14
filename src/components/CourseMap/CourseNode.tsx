import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useXarrow, Xwrapper } from 'react-xarrows'
import Xarrow from 'react-xarrows'
import { useTheme } from 'next-themes'
import { useCourse } from './CourseManager'
import { CourseNodeProps, RenderCourseProps } from '../../Types'
import { mapToRenderProps } from './useMapToRender'
import ArrowBox from './ArrowBox'


// Dumb component that renders a course node
const CourseNode = ({ courseId, courseName, next, setChildReady }: RenderCourseProps) => {
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
            <div className="flex flex-col gap-10">
                <Xwrapper>
                    {
                        next === undefined ? null :
                            next.map(item => {
                                const mappedNode = mapToRenderProps({
                                    courseId: item.courseId,
                                    courseName: item.courseName,
                                    status: item.status,
                                    next: item.next,
                                }, setSubChildReady)
                                return (
                                    (
                                        <div key={item.courseId}
                                            className="flex items-center"
                                        >
                                            <CourseNode
                                                key={mappedNode.courseId}
                                                {...mappedNode}
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