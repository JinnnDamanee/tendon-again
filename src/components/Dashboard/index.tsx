import Profile from "./Profile";
import Acheivement from "./Acheivement";
import Activity from "./Activity";
import Statistic from "./Statistic";
import { AnimatePresence, motion } from "framer-motion";
import Setting from "./Setting";
import { IoCaretForwardOutline } from 'react-icons/io5'
import { IconType } from "react-icons";
import { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ResumeList from "./SelectList/ResumeList";

enum modeType {
    'main',
    'search',
    'resume'
}

const DashBoard = () => {
    const dashboardRef = useRef(null)
    const [mode, setMode] = useState<modeType>(modeType.main);

    // const container = {
    //     main: { opacaity: 1, scale: 1, y: 0 },
    //     search: { opacity: 1, scale: 1, y: 0, transition: { when: "afterChildren" } },
    // }

    return (
        <motion.div className="flex gap-x-20"
        >
            <motion.main className={`flex gap-4 p-6 bg-gray-normal rounded-3xl min-h-[500px]`}
                key={'dashboard'}
                initial={{ opacity: 1, y: -100, scale: 0 }}
                // animate={mode === modeType.main ? "main" : "search"}
                animate={{
                    opacity: 1, y: 0, scale: 1,
                    width: mode === modeType.main ? "700px" : "350px",
                }}
                exit={{ opacity: 1, y: -100, scale: 0 }}
                drag={mode === modeType.main ? false : true}
                ref={dashboardRef}
                dragConstraints={dashboardRef}
            >


                <NavigateButton
                    direction="left"
                    Icon={AiOutlineSearch}
                    onClick={() => { mode === modeType.main ? setMode(modeType.search) : setMode(modeType.main) }}
                />

                {<div className="mt-5">
                    <Profile />
                    <Activity />
                    <Statistic />
                </div>}

                <AnimatePresence>
                    {mode === modeType.main && <Acheivement />}
                </AnimatePresence>
                <AnimatePresence>
                    {mode === modeType.main && <Setting />}
                </AnimatePresence>

                <NavigateButton
                    direction="right"
                    Icon={IoCaretForwardOutline}
                    onClick={() => { mode === modeType.main ? setMode(modeType.resume) : setMode(modeType.main) }}
                />
            </motion.main >
            {mode === modeType.resume && <ResumeList />}

        </motion.div>
    )
}
interface NavigateProps {
    Icon: IconType,
    direction: string,
    onClick: () => void,
}

const NavigateButton = ({ Icon, direction, onClick }: NavigateProps) => {
    return (
        <main className="w-0 h-0">
            <motion.button className={`bg-white h-fit w-fit rounded-full relative flex justify-center items-center p-2 top-56 ${direction === 'right' ? '-right-0' : '-left-12'}`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                initial={{ x: direction === 'right' ? '-100%' : '100%' }}
                animate={{ x: 0 }}
                onClick={onClick}
            >
                <Icon size={30} />
            </motion.button>
        </main>
    )
}

export default DashBoard;