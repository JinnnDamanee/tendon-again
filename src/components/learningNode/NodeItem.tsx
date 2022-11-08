import { Node } from '@customTypes/tendonAPItype';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { AiFillFilePdf, AiFillSound } from 'react-icons/ai';
import { FaVideo, FaImage } from 'react-icons/fa'
import { ImParagraphJustify } from 'react-icons/im'

const useNodeIconMatcher = (type: string) => {
    switch (type) {
        case 'pdfNode':
            return <AiFillFilePdf />
        case 'videoNode':
            return <FaVideo />
        case 'textNode':
            return <ImParagraphJustify />
        case 'soundNode':
            return <AiFillSound />
        case 'imageNode':
            return <FaImage />
        default:
            console.log('No icon found for type: ' + type)
        // throw new Error('No match type')
    }
}

const NodeItem = ({ type, attributes, id, name }: Node) => {
    const router = useRouter();
    const Icon = useNodeIconMatcher(type) // eslint-disable-line

    return (
        <motion.button
            className='flex gap-6 items-center p-4 bg-slate-200 dark:bg-gray-light rounded-2xl hover:scale-105 duration-200 active:translate-y-1'
            onClick={() => {
                console.log(type)
                // router.push(lessonData.attributes.resources)
            }}
        >
            <div className='bg-white dark:bg-slate-500 p-1.5 rounded-full scale-150'>
                {Icon}
            </div>
            <p className='text-lg'>{name}</p>
        </motion.button>
    )
}

export default NodeItem