import { motion } from 'framer-motion'
import Router from 'next/router'
import { resumeData, resumeProps } from '../../../data'
const ResumeList = () => {

    return (
        <motion.main className='flex flex-col gap-10'>
            {
                resumeData.map(item => {
                    return <ResumeItem key={item.id} {...item} />
                })
            }
        </motion.main>
    )
}
const ResumeItem = ({ id, courseName }: resumeProps) => {
    return (
        <motion.button className="p-2 bg-gray-normal rounded-lg text-white border-purple-light border-2 shadow-purple-neon shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => Router.push(`/courseMap/${id}`)}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
            {courseName}
        </motion.button>
    )
}
export default ResumeList;