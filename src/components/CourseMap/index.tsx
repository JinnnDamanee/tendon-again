import CourseNode from "./CourseNode";
import { motion } from 'framer-motion'
import Xarrow, { Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react"
import { MockRelateCourse } from "../../data/graphNode";
import { CourseNodeProps } from "../../Types";
import ArrowBox from "../ArrowBox";
import { usePrepNode } from "./CourseViewModel";

interface CourseMapProps {
    courseId: number
}

// Entire View of the Course Map (Container)
const CourseMap = ({ courseId }: CourseMapProps) => {
    const { theme } = useTheme();
    const [childReady, setChildReady] = useState(false);
    const [onClient, setOnClient] = useState(false);

    const StartCourseNode: CourseNodeProps = {
        courseId: courseId,
        courseName: "Introduction to Programming",
        status: 'completed',
        next: MockRelateCourse
    }

    const mappedNodeprop = usePrepNode(StartCourseNode, setChildReady);


    /*
    // Prep the data for rendering
    const mappedNodeprop: RenderCourseProps[] = useMemo(() => {
        return MockRelateCourse.map(node => {
            return mapToRenderProps(node, setChildReady)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courseId])
    */

    useEffect(() => {
        setOnClient(true)
        console.log(mappedNodeprop);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mappedNodeprop])

    if (!onClient) return null;

    return (
        <>
            <motion.main
                className="flex items-center gap-10"
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                {/* Start Node */}
                <CourseNode
                    // renderId={StartCourseNode.courseId} // Types require this, but it's not used
                    key={StartCourseNode.courseId}
                    courseId={StartCourseNode.courseId}
                    courseName={StartCourseNode.courseName}
                    status={StartCourseNode.status}
                    setChildReady={() => { }} // No Child will use this one so it's fine
                    isRender={true}
                />
                <div className="flex flex-col gap-10">
                    <Xwrapper>

                        {/* Like Next Mapping Render */}
                        {mappedNodeprop.map((item, index) => {
                            return (
                                // End Node
                                <div key={index} className="flex gap-10 items-center" >
                                    <CourseNode
                                        key={item.courseId}
                                        {...item}
                                    />
                                    {
                                        childReady && (
                                            <ArrowBox>
                                                <Xarrow
                                                    start={StartCourseNode.courseId.toString()}
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