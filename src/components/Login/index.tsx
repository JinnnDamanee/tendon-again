import { motion } from 'framer-motion'
import Link from 'next/link'
import Setting from '../Dashboard/Setting'
const Login = () => {
    return (
        <motion.main
            className="bg-gray-normal p-6 flex gap-4 rounded-3xl min-h-[500px]"
            // key={'dashboard'}
            initial={{ opacity: 1, y: -100, scale: 0 }}
            // animate={mode === modeType.main ? "main" : "search"}
            animate={{
                opacity: 1, y: 0, scale: 1,
                // width: mode === modeType.main ? "700px" : "350px",
            }}
            exit={{ opacity: 1, y: -100, scale: 0 }}
        // drag={mode === modeType.main ? false : true}
        // ref={dashboardRef}
        // dragConstraints={dashboardRef}
        >
            <motion.div
                className='flex flex-col gap-4 p-4 bg-gray-light rounded-xl'
                initial={{ opacity: 0, scale: 0, y: -100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
            >
                <h1 className="p-2 text-2xl font-bold text-white">Login</h1>
                <input
                    type="text"
                    placeholder='myemail@mail.com'
                    className='input text-white' />
                <input
                    type="password"
                    placeholder='Password'
                    className='input text-white' />
                <motion.button
                    className="bg-gradient-to-r from-purple-light to-purple-neon border-0 text-white font-bold py-2 px-4 rounded-full"
                    whileTap={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Log In
                </motion.button>
                <p className='text-white text-sm text-center'>
                    Don’t have an account &nbsp;
                    <Link href={'/signup'} >
                        <span
                            className='cursor-pointer text-purple-light hover:text-purple-neon'>
                            Sign Up
                        </span>
                    </Link>
                </p>
            </motion.div>
            <div >
                <Setting />
            </div>
        </motion.main>
    )
}

export default Login