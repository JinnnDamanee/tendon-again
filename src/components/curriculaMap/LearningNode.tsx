import { useEffect, useMemo, useState } from 'react'
import { Xwrapper } from 'react-xarrows'
import Xarrow from 'react-xarrows'
import { useTheme } from 'next-themes'
import { RenderLearningNodeProps } from '../../customTypes'
import ArrowBox from '../baseComponents/ArrowBox'
import { nodeStatusColor } from './LeaningNodeViewModel'
import LearningNodeMotion from '@components/baseComponents/LearningNodeMotion'

const CourseNode = ({ courseId, courseName, next, setChildReady, isRender, status }: RenderLearningNodeProps) => {
    const { theme } = useTheme();
    const [subChildReady, setSubChildReady] = useState(false);

    useEffect(() => {
        setTimeout(() => setChildReady(true), 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const statusColor = useMemo(() => nodeStatusColor(status), [])

    return (
        <>
            <LearningNodeMotion
                courseId={courseId}
                courseName={courseName}
                isRender={isRender}
                status={status}
                statusColor={statusColor}
            />

            {/* Next Course */}
            <div className="flex flex-col gap-10">
                <Xwrapper>
                    {
                        next?.map((item, index) => {
                            // if (!item.isRender) return null;
                            return (
                                (
                                    <div key={index} className="flex items-center">
                                        <CourseNode
                                            key={item.courseId}
                                            {...item}
                                            setChildReady={setSubChildReady}
                                        />
                                        <ArrowBox>
                                            {subChildReady &&
                                                <Xarrow
                                                    start={courseId.toString()}
                                                    end={item.courseId.toString()}
                                                    color={theme === 'light' ? '#475569' : '#961EFF'}
                                                />
                                            }
                                        </ArrowBox>
                                    </div>
                                )
                            )
                        })
                    }
                </Xwrapper>
            </div>
        </>
    );
}
/*

*/
export default CourseNode;