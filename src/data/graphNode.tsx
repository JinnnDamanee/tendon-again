import { LearningNodeProps, StatusType } from "../customTypes";



export const MockRelateCourse: LearningNodeProps[] = [
    {
        courseId: '2',
        courseName: "First",
        status: StatusType.COMPLETED,
        next: [
            {
                courseId: '3',
                courseName: "Framework",
                status: StatusType.INPROGRESS,
                next: [
                    {
                        courseId: '4',
                        courseName: "React",
                        status: StatusType.NOTSTARTED,
                    },
                    {
                        courseId: '5',
                        courseName: "Vue",
                        status: StatusType.NOTSTARTED,
                    },
                ]
            },
            {
                courseId: '7',
                courseName: "Language",
                status: StatusType.NOTSTARTED,
                next: [
                    {
                        courseId: '8',
                        courseName: "JavaScript",
                        status: StatusType.NOTSTARTED,
                    },
                    {
                        courseId: '9',
                        courseName: "TypeScript",
                        status: StatusType.NOTSTARTED,
                    },
                ]
            }
        ]
    },
    {
        courseId: '6',
        courseName: "Second",
        status: StatusType.COMPLETED,
        next: [
            {
                courseId: '7',
                courseName: "Language",
                status: StatusType.NOTSTARTED,
            }
        ]
    },
]