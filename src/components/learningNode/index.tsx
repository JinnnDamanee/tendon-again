import NodeItem from './NodeItem';
import { LearningNode } from '@customTypes/tendonAPItype';
import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from '@components/baseComponents/LoadingSpinner';
import Modal from './Modal';

// import dynamic from 'next/dynamic'
// const Modal = dynamic(() => import('./Modal'));

type LessonNodeDataProps = {
    LearningNodeData: LearningNode
}


const getResData = ({ resLink, resType }: resSource) => {
    console.log(resLink)
    switch (resType) {
        case 'textNode':
            return <p>text</p>
        default:
            return <p>no data</p>
    }
}

export type resSource = {
    resLink: string
    resType: string
}

const LessonNode = ({ LearningNodeData }: LessonNodeDataProps) => {

    const [isOpened, setIsOpened] = useState(false)
    const [resSource, setResSource] = useState<resSource>({ resLink: '', resType: '' })
    const [modalData, setModalData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
    }, [])

    useEffect(() => {
        if (isOpened) {
            setModalData(getResData(resSource))
        }
    }, [isOpened, resSource])

    return (
        <>
            {
                !isLoading ? <LoadingSpinner /> :
                    <>
                        {
                            <div className='flex gap-x-20 justify-center mt-10'                 >
                                <div className='flex flex-col gap-4 p-6 bg-slate-100 dark:bg-gray-normal rounded-3xl  min-w-[300px]'                    >
                                    <h1 className='text-2xl p-2 font-bold text-center'>{LearningNodeData.attributes?.learningNodeName}</h1>
                                    {
                                        LearningNodeData.attributes?.subNode && LearningNodeData.attributes?.subNode.map((node, index) => {
                                            return (
                                                <NodeItem
                                                    key={index}
                                                    type={node.type}
                                                    name={node.name}
                                                    attributes={node.attributes}
                                                    id={node.id}
                                                    setIsOpened={setIsOpened}
                                                    setResSource={setResSource}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                        {
                            isOpened && modalData && (
                                <Suspense fallback={<LoadingSpinner />}>
                                    <Modal
                                        setIsOpened={setIsOpened}
                                        showData={modalData}
                                    />
                                </Suspense>
                            )
                        }
                    </>
            }
        </>

    )
}

export default LessonNode