import Profile from "./Profile";
import Acheivement from "./Acheivement";
import Activity from "./Activity";
import Statistic from "./Statistic";
import { AnimatePresence, motion } from "framer-motion";
import Setting from "./Setting";
import { IoCaretForwardOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ResumeList from "./SelectList/ResumeList";
import { modeType } from "../../Types";
import NavigateButton from "./NavigateButton";

const DashBoard = () => {
    const dashboardRef = useRef(null)
    const [mode, setMode] = useState<modeType>(modeType.main);
    //const [width, setWidth] = useState(0)

    const navigateMode = () => {
        //const currentWidth = dashboardRef.current.clientWidth
        if (mode === modeType.main) {
            setMode(modeType.resume)
            /*
            if (currentWidth !== 0) {
                setWidth(currentWidth)
            }
            console.log(currentWidth);
            */
        } else {
            setMode(modeType.main)
            /*
            if (currentWidth !== 0) {
                setWidth(currentWidth)
            }
            console.log(currentWidth);
            */
        }
    }

    return (
        <motion.div
            className="flex gap-x-20"
        >
            <motion.main className={`flex gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl min-h-[500px]`}
                key={'dashboard'}
                initial={{ opacity: 1, y: -100, scale: 0 }}
                animate={{
                    opacity: 1, y: 0, scale: 1,
                    // width: width === 0 ? '100%' : width
                    width: mode === modeType.main ? '728px' : '344px'
                }}
                exit={{ opacity: 1, y: -100, scale: 0 }}
                drag={mode === modeType.main ? false : true}
                id='dashboard'
                ref={dashboardRef}
                dragConstraints={dashboardRef}
            >

                <NavigateButton
                    direction="left"
                    Icon={AiOutlineSearch}
                    onClick={() => navigateMode()}
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
                    onClick={() => navigateMode()}
                />
            </motion.main >
            {mode === modeType.resume && <ResumeList />}

        </motion.div>
    )
}
export default DashBoard;