import CourseNode, { CourseNodeProps } from "./CourseNode";
import { motion } from 'framer-motion'
import BreadCrumbNav from "./BreadCrumbNav";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react"
interface CourseMapProps {
    CourseId: number
}


// Entire View of the Course Map (Container)
const CourseMap = ({ CourseId }: CourseMapProps) => {
    const { theme } = useTheme();
    const [childReady, setChildReady] = useState(false);

    const MockRelateCourse: any[] = [
        {
            CourseId: 2,
            CourseName: "Web Development",
        },
        {
            CourseId: 3,
            CourseName: "Ruby on Rails",
        },
        {
            CourseId: 4,
            CourseName: "JavaScript",
        },
        {
            CourseId: 5,
            CourseName: "React",
        },
        {
            CourseId: 6,
            CourseName: "Node.js",
        }
    ]

    return (
        <>
            <motion.main
                className="flex items-center gap-10"
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                {/* Start Node */}
                <CourseNode
                    key={CourseId}
                    CourseId={CourseId}
                    CourseName="Introduction to Programming"
                    setChildReady={setChildReady}
                />
                <div className="flex flex-col gap-10 ml-20">
                    <Xwrapper>
                        {MockRelateCourse.map((item, index) => {
                            return (
                                // End Node
                                <div key={index}>
                                    <CourseNode
                                        key={item.CourseId}
                                        CourseId={item.CourseId}
                                        CourseName={item.CourseName}
                                        setChildReady={setChildReady}
                                    />
                                    {
                                        childReady && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <Xarrow
                                                    start={CourseId.toString()}
                                                    end={item.CourseId.toString()}
                                                    color={theme === 'light' ? '#475569' : '#961EFF'}
                                                />
                                            </motion.div>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </Xwrapper>
                </div>

            </motion.main>
        </>
    )
}



export default CourseMap;