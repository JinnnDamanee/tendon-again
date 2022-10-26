import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Xarrow, { Xwrapper } from 'react-xarrows'
import { resumeProps } from '../../../data'
import ArrowBox from '../../baseComponents/ArrowBox'
import ResumeItem from './ResumeItem'


const ResumeList = () => {
    const { theme } = useTheme();
    const [isReady, setIsReady] = useState(false);

    const resumeData: resumeProps[] = [
        {
            id: 101,
            courseName: "Web Development",
            setIsReady: setIsReady,
        },
        {
            id: 102,
            courseName: "Machine Learning",
            setIsReady: setIsReady,
        },
        {
            id: 103,
            courseName: "Embedded System",
            setIsReady: setIsReady,
        },
    ]


    return (
        <motion.main
            className='flex flex-col gap-10 justify-center'
        >
            <Xwrapper>
                {
                    resumeData.map((item, index) => {
                        return (
                            <div key={index}>
                                <ResumeItem key={item.id} {...item} setIsReady={setIsReady} />
                                {
                                    isReady && (
                                        <ArrowBox>
                                            <Xarrow
                                                start={'dashboard'}
                                                end={item.id.toString()}
                                                color={theme === 'light' ? '#475569' : '#961EFF'}
                                            />
                                        </ArrowBox>

                                    )
                                }
                            </div>
                        )
                    })
                }
            </Xwrapper>
        </motion.main>
    )
}
export default ResumeList;