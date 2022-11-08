import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import NodeItem from './NodeItem';
import { LearningNode } from '@customTypes/tendonAPItype';

type LessonNodeDataProps = {
    LearningNodeData: LearningNode
}

const LessonNode = ({ LearningNodeData }: LessonNodeDataProps) => {
    return (
        <motion.div
            className='flex gap-x-20 justify-center mt-10'
        >
            <motion.div
                className='flex flex-col gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl  min-w-[300px]'
            >
                <h1 className='text-2xl p-2 font-bold text-center'>{LearningNodeData.attributes?.learningNodeName}</h1>
                {
                    LearningNodeData.attributes?.subNode && LearningNodeData.attributes?.subNode.map((node, index) => {
                        return (
                            <NodeItem
                                key={index}
                                {...node}
                            />
                        )
                    })
                }
            </motion.div>
        </motion.div>
    )
}

export default LessonNode