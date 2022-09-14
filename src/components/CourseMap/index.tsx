import CourseNode from "./CourseNode";
import { motion } from 'framer-motion'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react"
import { MockRelateCourse } from "../../data/graphNode";
import { mapToRenderProps } from "./useMapToRender";
import ArrowBox from "./ArrowBox";

interface CourseMapProps {
    courseId: number
}


// Entire View of the Course Map (Container)
const CourseMap = ({ courseId }: CourseMapProps) => {
    const { theme } = useTheme();
    const [childReady, setChildReady] = useState(false);
    const [onClient, setOnClient] = useState(false);

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
                    key={courseId}
                    courseId={courseId}
                    courseName="Introduction to Programming"
                    status='completed'
                    setChildReady={setChildReady}
                />
                <div className="flex flex-col gap-10">
                    <Xwrapper>
                        {MockRelateCourse.map((item, index) => {
                            const mappedNode = mapToRenderProps({
                                courseId: item.courseId,
                                courseName: item.courseName,
                                status: item.status,
                                next: item.next,
                            }, setChildReady)

                            return (
                                // End Node
                                <div key={index}
                                    className="flex gap-10 items-center"
                                >
                                    <CourseNode
                                        key={mappedNode.courseId}
                                        {...mappedNode}
                                    />
                                    {
                                        childReady && (
                                            <ArrowBox>
                                                <Xarrow
                                                    start={courseId.toString()}
                                                    end={item.courseId.toString()}
                                                    color={theme === 'light' ? '#475569' : '#961EFF'}
                                                />
                                            </ArrowBox>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </Xwrapper >
                </div >
            </motion.main >
        </>
    )
}



export default CourseMap;