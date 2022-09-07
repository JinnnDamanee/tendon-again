import { motion } from 'framer-motion'

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
export default CourseDetail;