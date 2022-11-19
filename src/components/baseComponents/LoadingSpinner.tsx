import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const LoadingSpinner = () => {
    return (
        <motion.main
            className='absolute top-1/2 left-1/2'
        >
            <AiOutlineLoading3Quarters className='fill-slate-200 animate-spin text-6xl' />
        </motion.main>
    )
}

export default LoadingSpinner