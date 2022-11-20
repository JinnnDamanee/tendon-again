import { resSource } from '@customTypes/index';
import { Node } from '@customTypes/tendonAPItype';
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

interface NodeItemProps extends Node {
    setIsOpened: (value: boolean) => void
    setResSource: (value: resSource) => void
}

const NodeItem = ({ type, attributes, id, name, setIsOpened, setResSource }: NodeItemProps) => {
    const Icon = useNodeIconMatcher(type) // eslint-disable-line

    const handleOnClick = () => {
        switch (type) {
            case 'textNode':
                setIsOpened(true)
                setResSource({
                    resLink: attributes.resources,
                    resType: type
                })
            default:
        }
    }

    return (
        <button
            className='flex gap-6 items-center p-4 bg-slate-200 dark:bg-gray-light rounded-2xl hover:scale-105 duration-200 active:translate-y-1'
            onClick={() => handleOnClick()}
        >
            <div className='bg-white dark:bg-slate-500 p-1.5 rounded-full scale-150'>
                {Icon}
            </div>
            {
                type != 'pdfNode' ?
                    <p className='text-lg'>{name}</p> :
                    <a href={'/cd.pdf'} target='_blank' rel='noopener noreferrer' className='text-lg'>{name}</a>
            }
        </button>
    )
}

export default NodeItem