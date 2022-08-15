import { activityData } from '../../data/index'
import { motion } from 'framer-motion'
const Activity = () => {
    return (
        <main className="grid gap-2 grid-rows-2 grid-flow-col w-fit p-4">
            {activityData.map((item, idx) => {
                return <ActivityBox key={idx} {...item} />
            })}
        </main>
    )
}

interface ActivityBox {
    isActive: boolean,
}
const ActivityBox = ({ isActive }: ActivityBox) => {


    return (
        <motion.div className={`${isActive ? 'bg-gradient-to-bl from-purple-neon to-purple-light' : 'bg-gray-light'} h-4 w-4 hover:brightness-150`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1 }}
        >

        </motion.div>
    )
}

export default Activity;