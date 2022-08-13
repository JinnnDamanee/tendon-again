import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'

export interface CourseNodeProps {
    CourseId: number
    CourseName: string
}

const showDetailType = [
    "assignments",
    "lectures",
    "quizzes",
]

// Dumb component that renders a course node
const CourseNode = ({ CourseId, CourseName }: CourseNodeProps) => {
    // use courseId to get the course data from the server
    // but we will mock it for now
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
    // const heigthRef = useRef<HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.button className="p-4 text-xl bg-gray-normal rounded-lg text-white border-purple-light border-2 shadow-purple-neon shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1, scale: 1,
                // height: isOpen ? 'auto' : 'auto',
            }}
            exit={{ opacity: 0, scale: 0 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(!isOpen)}
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
                                            whileHover={{ scale: 1.1 }}
                                            className='text-sm bg-gray-dark rounded-lg p-2'
                                            onClick={() => { alert(item.name) }}
                                        >{item.name}</motion.button>

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