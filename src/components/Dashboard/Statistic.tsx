import React from "react";
import { statData } from "../../data";
import { AiFillBook } from 'react-icons/ai'
import { motion } from 'framer-motion'
const Statistic = () => {
    return (
        <main className="flex flex-col gap-2">
            <h1 className="font-bold text-slate-700 dark:text-white text-2xl">Summary</h1>
            {statData.map((item, idx) => {
                return <StatList key={idx} {...item} />
            })}
        </main>
    )
}
const StatList: React.FC<{ name: string }> = ({ name }) => {
    return (
        <motion.main className="text-white bg-gradient-to-bl from-purple-neon to-purple-light rounded p-2 flex items-center shadow"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}

        >
            <AiFillBook size={30} />
            {name}
        </motion.main>
    )
}
export default Statistic;