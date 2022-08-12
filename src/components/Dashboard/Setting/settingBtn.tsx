import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
interface ControlBtnProps {
    Icon: IconType
}

const ControlBtn = ({ Icon }: ControlBtnProps) => {
    return (
        <motion.button className="bg-gray-normal rounded-full p-2"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
        >
            <Icon size={20} />
        </motion.button>
    )
}
export default ControlBtn;
