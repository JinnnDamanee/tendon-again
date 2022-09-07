import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useXarrow } from 'react-xarrows'


export interface CourseNodeProps {
    CourseId: number
    CourseName: string
    setChildReady: (value: boolean) => void
}

const showDetailType = [
    "assignments",
    "lectures",
    "quizzes",
]
const courseData = {
    assignments: [
        {
            id: 1,
            name: 'Assignment 1'
        },
        {
            id: 2,
            name: 'Assignment 2'
        },
    ],
    lectures: [
        {
            id: 1,
            name: 'Lecture 1'
        },
        {
            id: 2,
            name: 'Lecture 2'
        },
    ],
    quizzes: [
        {
            id: 1,
            name: 'Quiz 1'
        },
    ],
    prerequisites: [
        {
            id: 1,
            name: 'Prerequisite 1'
        },
    ]
}

// Dumb component that renders a course node
const CourseNode = ({ CourseId, CourseName, setChildReady }: CourseNodeProps) => {
    // use courseId to get the course data from the server
    // but we will mock it for now

    // const heigthRef = useRef<HTMLDivElement>(null)
    const updateArrow = useXarrow();
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => setChildReady(true), 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <motion.button
            className="p-4 text-xl rounded-lg shadow-lg
        bg-slate-500 dark:bg-gray-normal text-white dark:border-2 dark:border-purple-light dark:shadow-purple-neon "
            id={CourseId.toString()}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1, scale: 1,
                // height: isOpen ? 'auto' : 'auto',
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}

            // onDrag={() => {
            //     setInterval(updateArrow, 200)
            // }}
            // onClick={() => {
            //     setIsOpen(!isOpen);
            // }}
            onUpdate={() => {
                setInterval(updateArrow, 100)
            }}
        >
            <h1>{CourseName}</h1>
            <AnimatePresence
                exitBeforeEnter
            >
                {
                    isOpen && <CourseDetail courseData={courseData} />
                }
            </AnimatePresence>
        </motion.button>
    );
}
const CourseDetail: React.FC<any> = ({ courseData }) => {
    return (
        <motion.main
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="grid gap-2 p-2"
        >
            <div className='flex flex-col gap-4'>
                {
                    showDetailType.map((type) => {
                        return (
                            courseData[`${type}`]?.map((item: any) => {
                                return (
                                    <>
                                        <motion.button
                                            key={item.id}
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.05 }}
                                            className='text-sm bg-slate-600 dark:bg-gray-dark rounded-lg p-2'
                                            onClick={() => { alert(item.name) }}
                                        >
                                            {item.name}
                                        </motion.button>

                                    </>
                                )
                            })
                        )
                    })
                }
            </div>
        </motion.main>
    );
}

export default CourseNode;