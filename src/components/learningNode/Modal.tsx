import { motion } from 'framer-motion'

type ModalProps = {
    setIsOpened: (value: boolean) => void,
    showData: any
}

const Modal = ({ setIsOpened, showData }: ModalProps) => {
    return (
        <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50' onClick={() => setIsOpened(false)}>
            <motion.div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-normal rounded-2xl p-4'
                onClick={(e) => e.stopPropagation()}
            >
                {showData}
            </motion.div>
        </div>
    )
}

export default Modal