import { LearningNodeProps, RenderLearningNodeProps, StatusType } from "../../customTypes";
/*
    View Model
*/

export const nodeStatusColor = (status: StatusType): string => {
    switch (status) {
        case StatusType.NOTSTARTED:
            return ''
        case StatusType.INPROGRESS:
            return 'bg-purple-light dark:border-2 dark:border-pale-yellow dark:shadow-pale-yellow'
        case StatusType.COMPLETED:
            return 'bg-purple-neon dark:border-2 dark:border-purple-light dark:shadow-purple-neon'
        default:
            return "ERROR"
    }
}

export const prepNode = (
    startNode: LearningNodeProps,
    defaultSetChildReady: (value: boolean) => void): RenderLearningNodeProps[] => {

    const outputNode: RenderLearningNodeProps[] = [];
    const nodeHistory: string[] = [];

    // Recursive function to map the node
    const mapToRenderProps = (node: LearningNodeProps): RenderLearningNodeProps => {
        let isShouldRender;
        if (nodeHistory.includes(node.courseId)) {
            isShouldRender = false;
        } else {
            isShouldRender = true;
            nodeHistory.push(node.courseId);
        }
        const next: RenderLearningNodeProps[] | undefined = node.next === undefined ? undefined : node.next.map(childNode => {
            return mapToRenderProps(childNode)
        })
        const mapNode: RenderLearningNodeProps = {
            courseId: node.courseId,
            courseName: node.courseName,
            status: node.status,
            next: next,
            setChildReady: defaultSetChildReady,
            isRender: isShouldRender
        }
        return mapNode;
    }

    startNode.next?.map(initNode => {
        const node = mapToRenderProps(initNode);
        outputNode.push(node);
    })

    // console.log("outputNode : ", outputNode);

    return outputNode;
}