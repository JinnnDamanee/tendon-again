import ControlBtn from "./settingBtn";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineSearch, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from "next/router";
const Setting = () => {

    const router = useRouter();

    return (
        <motion.main
            className="  bg-slate-200 text-white  dark:bg-gray-medium rounded-3xl pt-6  p-2 flex flex-col gap-4 h-full"
            key='setting'
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
        // exit={'hidden'}
        // variants={item}
        >
            <ControlBtn Icon={AiOutlineUser} title='Profile' />
            <ControlBtn Icon={AiOutlineSetting} title='Setting' />
            {
                router.pathname === '/login' || router.pathname === '/signup' ?
                    <ControlBtn
                        Icon={AiOutlineLogin}
                        title='Login'
                        onclick={() => router.push('/')}
                    />
                    :
                    <ControlBtn
                        Icon={AiOutlineLogout}
                        title='Logout'
                        onclick={() => router.push('/login')}
                    />
            }

        </motion.main>

    )
}
export default Setting;