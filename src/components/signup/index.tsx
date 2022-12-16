import { motion } from 'framer-motion'
import Setting from '../dashboard/setting';
const SignupBox = () => {
    return (
        <div className="flex gap-x-20 justify-center">
            <motion.main
                className="bg-slate-100 dark:bg-gray-normal text-white p-6 flex gap-4 rounded-3xl min-h-[500px]"
                initial={{ opacity: 1, y: -100, scale: 0 }}
                animate={{
                    opacity: 1, y: 0, scale: 1,
                }}
                exit={{ opacity: 1, y: -100, scale: 0 }}
            >
                <motion.div
                    className='flex flex-col gap-4 p-4 bg-slate-200 dark:bg-gray-light  text-slate-700 dark:text-white rounded-xl'
                    initial={{ opacity: 0, scale: 0, y: -100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                    <h1 className="p-2 text-2xl font-bold">Sign Up</h1>
                    <input
                        type="text"
                        placeholder='myemail@mail.com'
                        className='input' />
                    <div className='flex gap-4'>
                        <input
                            type="text"
                            placeholder='First Name'
                            className='input ' />
                        <input
                            type="text"
                            placeholder='Last Name'
                            className='input' />
                    </div>
                    <input
                        type="password"
                        placeholder='Password'
                        className='input' />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        className='input' />
                    <motion.button
                        className="bg-gradient-to-r from-purple-light to-purple-neon border-0 text-white font-bold py-2 px-4 rounded-full"
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Sign Up
                    </motion.button>
                </motion.div>
                <div >
                    <Setting />
                </div>
            </motion.main>
        </div>
    )
}


export default SignupBox;