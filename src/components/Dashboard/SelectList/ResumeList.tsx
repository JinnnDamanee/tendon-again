import { motion } from 'framer-motion'
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
const ResumeItem = ({ courseName }: resumeProps) => {
    return (
        <motion.main className="p-2 bg-gray-normal rounded-lg text-white border-purple-light border-2 shadow-purple-neon shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
        >
            {courseName}
        </motion.main>
    )
}
export default ResumeList;