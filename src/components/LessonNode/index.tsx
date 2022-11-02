import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NodeItem from './NodeItem';


export type lessonDataProps = {
    type: 'pdfNode' | 'videoNode' | 'textNode' | 'soundNode' | 'imageNode'
    id: string
    attributes: {
        priority: 'required' | 'extension' | 'optional'
        size: number
        resources: string
    }
}

const LessonNode = () => {
    const router = useRouter()
    const { data, parentName } = router.query
    const lessonData: lessonDataProps = JSON.parse(data as string)

    useEffect(() => {
        console.log(lessonData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <motion.div
            className='flex gap-x-20 justify-center mt-10'
        >
            <motion.div
                className='flex flex-col gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl  min-w-[300px]'
            >
                <h1 className='text-2xl p-2 font-bold text-center'>{parentName}</h1>
                <NodeItem
                    {...lessonData}
                />
            </motion.div>
        </motion.div>
    )
}

export default LessonNode