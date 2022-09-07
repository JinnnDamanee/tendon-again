import CourseNode, { CourseNodeProps } from "./CourseNode";
import { motion } from 'framer-motion'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react"
import { useCourse } from "./CourseManager";
interface CourseMapProps {
    CourseId: number
}


// Entire View of the Course Map (Container)
const CourseMap = ({ CourseId }: CourseMapProps) => {
    const { theme } = useTheme();
    const [childReady, setChildReady] = useState(false);
    const [onClient, setOnClient] = useState(false);
    const MockRelateCourse: any[] = [
        {
            CourseId: 2,
            CourseName: "First",
            next: [
                {
                    CourseId: 3,
                    CourseName: "Framework",
                    next: [
                        {
                            CourseId: 4,
                            CourseName: "React",
                        },
                        {
                            CourseId: 5,
                            CourseName: "Vue",
                        },
                    ]
                },
                {
                    CourseId: 7,
                    CourseName: "Language",
                    next: [
                        {
                            CourseId: 8,
                            CourseName: "JavaScript",
                        },
                        {
                            CourseId: 9,
                            CourseName: "TypeScript",
                        },
                    ]
                }
            ]
        },
        {
            CourseId: 6,
            CourseName: "Second",
            next: [
                {
                    CourseId: 7,
                    CourseName: "Language",
                }
            ]
        },

        /*
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
        }*/
    ]
    useEffect(() => setOnClient(true), [])
    if (!onClient) return null;

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
                <div className="flex flex-col gap-10">
                    <Xwrapper>
                        {MockRelateCourse.map((item, index) => {
                            return (
                                // End Node
                                <div key={index}
                                    className="flex gap-10 items-center"
                                >
                                    <CourseNode
                                        key={item.CourseId}
                                        {...item}
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