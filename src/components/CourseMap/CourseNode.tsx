import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useXarrow, Xwrapper } from 'react-xarrows'
import Xarrow from 'react-xarrows'
import { useTheme } from 'next-themes'
import { RenderCourseProps } from '../../Types'
import ArrowBox from '../ArrowBox'

const CourseNode = ({ courseId, courseName, next, setChildReady, isRender, status }: RenderCourseProps) => {
    const { theme } = useTheme();
    const updateArrow = useXarrow();
    const [subChildReady, setSubChildReady] = useState(false);
    const nodeRef = useRef(null)

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
                            next.map((item, index) => {
                                if (!isRender) return null;
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