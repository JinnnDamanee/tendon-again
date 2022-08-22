import CourseNode, { CourseNodeProps } from "./CourseNode";
import { motion } from 'framer-motion'
import BreadCrumbNav from "./BreadCrumbNav";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react"
interface CourseMapProps {
    CourseId: number
}


// Entire View of the Course Map (Container)
const CourseMap = ({ CourseId }: CourseMapProps) => {
    const { theme } = useTheme();
    const [onClient, setOnClient] = useState(false);

    useEffect(() => {
        setOnClient(true)
    }, [])

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

                />
                <div className="grid gap-10 ml-20">
                    {MockRelateCourse.map((item, index) => {
                        return (
                            // End Node
                            <Xwrapper key={index}>
                                <CourseNode
                                    key={item.CourseId}
                                    CourseId={item.CourseId}
                                    CourseName={item.CourseName}
                                />
                                <Xarrow
                                    start={CourseId.toString()}
                                    end={item.CourseId.toString()}
                                    color={theme === 'light' ? '#475569' : '#961EFF'}
                                />
                            </Xwrapper>
                        )
                    })}
                </div>

            </motion.main>
        </>
    )
}
const MockRelateCourse: CourseNodeProps[] = [
    {
        CourseId: 2,
        CourseName: "Web Development"
    },
    {
        CourseId: 3,
        CourseName: "Ruby on Rails"
    },
    {
        CourseId: 4,
        CourseName: "JavaScript"
    },
    {
        CourseId: 5,
        CourseName: "React"
    },
    {
        CourseId: 6,
        CourseName: "Node.js"
    }
]


export default CourseMap;