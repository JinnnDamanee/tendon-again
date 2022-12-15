import { motion } from 'framer-motion'
import Link from 'next/link'
import Setting from '../dashboard/setting'
const Login = () => {
    return (
        <div
            className="flex gap-x-20 justify-center"
        >
            <motion.main
                className="bg-slate-100 dark:bg-gray-normal p-6 flex gap-4 rounded-3xl min-h-[500px]"
                initial={{ opacity: 1, y: -100, scale: 0 }}
                animate={{
                    opacity: 1, y: 0, scale: 1,
                }}
                exit={{ opacity: 1, y: -100, scale: 0 }}
            >
                <motion.div
                    className='flex flex-col gap-4 p-4 rounded-xl bg-slate-200 dark:bg-gray-light  text-slate-700 dark:text-white'
                    initial={{ opacity: 0, scale: 0, y: -100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                    <h1 className="p-2 text-2xl font-bold ">Login</h1>
                    <input
                        type="text"
                        placeholder='myemail@mail.com'
                        className='input' />
                    <input
                        type="password"
                        placeholder='Password'
                        className='input' />
                    <motion.button
                        className="bg-gradient-to-r text-white from-purple-light to-purple-neon border-0  font-bold py-2 px-4 rounded-full"
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Log In
                    </motion.button>
                    <p className=' text-sm text-center'>
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
        </div>
    )
}
export default Login