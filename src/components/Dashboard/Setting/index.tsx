import ControlBtn from "./settingBtn";
import { AiOutlineSearch, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

const Setting = () => {
    // const item = {
    //     hidden: {
    //         opacity: 0,
    //         scale: 0,
    //         transition: { duration: 0.1 }
    //     },
    // }
    return (
        <motion.main className="bg-gray-medium rounded-3xl pt-6 text-white p-2 flex flex-col gap-4"
            key='setting'
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
        // exit={'hidden'}
        // variants={item}
        >
            <ControlBtn Icon={AiOutlineSetting} />
            <ControlBtn Icon={AiOutlineSearch} />
            <ControlBtn Icon={AiOutlineUser} />
        </motion.main>

    )
}
export default Setting;