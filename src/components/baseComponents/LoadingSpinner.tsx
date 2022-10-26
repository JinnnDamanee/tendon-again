import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const LoadingSpinner = () => {
    return (
        <motion.main
            className='fill-slate-200 animate-spin text-6xl'
        >
            <AiOutlineLoading3Quarters />
        </motion.main>
    )
}

export default LoadingSpinner