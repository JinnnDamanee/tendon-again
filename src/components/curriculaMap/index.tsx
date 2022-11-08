import CourseNode from "./LearningNode";
import { motion } from 'framer-motion'
import Xarrow, { Xwrapper } from 'react-xarrows'
import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useState } from "react"
import { LearningNodeProps } from "customTypes";
import ArrowBox from "../baseComponents/ArrowBox";
import { prepNode } from "./LeaningNodeViewModel";

interface LearningNodeMapProps {
    learningNodeData: LearningNodeProps
}
// Entire View of the Course Map (Container)
const LearningNodeMap = ({ learningNodeData }: LearningNodeMapProps) => {
    const { theme } = useTheme();
    const [childReady, setChildReady] = useState(false);
    const [onClient, setOnClient] = useState(false);

    const mappedNodeprop = useMemo(() => prepNode(learningNodeData, setChildReady), [learningNodeData])

    useEffect(() => {
        setOnClient(true)
    }, [])

    if (!onClient) return null;

    return (
        <>
            <motion.main
                className="flex items-center justify-center gap-10"
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                {/* Start Node */}
                <CourseNode
                    // renderId={startCourseNode.courseId} // Types require this, but it's not used
                    key={learningNodeData.courseId}
                    courseId={learningNodeData.courseId}
                    courseName={learningNodeData.courseName}
                    status={learningNodeData.status}
                    setChildReady={() => { }} // No Child will use this one so it's fine
                    isRender={true}
                />
                <div className="flex flex-col gap-10">
                    <Xwrapper>

                        {/* Like Next Mapping Render */}
                        {mappedNodeprop.map((item, index) => {
                            return (
                                // End Node
                                // logic Rendering
                                <div key={index} className="flex gap-10 items-center" >
                                    <CourseNode
                                        key={item.courseId}
                                        {...item}
                                    />
                                    {
                                        childReady && (
                                            <ArrowBox>
                                                <Xarrow
                                                    start={learningNodeData.courseId.toString()}
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

export default LearningNodeMap;