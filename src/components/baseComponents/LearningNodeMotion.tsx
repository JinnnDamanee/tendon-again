import { StatusType } from 'types'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useXarrow } from 'react-xarrows'

type LearningNodeProps = {
    statusColor: string
    courseId: number
    courseName: string
    isRender: boolean
    status: StatusType
}

const LearningNode = ({ statusColor, courseId, courseName, isRender, status }: LearningNodeProps) => {
    const updateArrow = useXarrow();
    const router = useRouter();
    const nodeRef = useRef(null);

    const subNode = {
        type: "pdfNode",
        id: "string",
        attributes: {
            "priority": "require",
            "size": 0,
            "resources": "/resources/pdf/1234"
        }
    }

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
                            router.push({
                                pathname: `${router.asPath}/${courseId}`,
                                query: {
                                    data: JSON.stringify(subNode),
                                    parentName: courseName
                                }
                            })
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
        </>

    )
}

export default LearningNode