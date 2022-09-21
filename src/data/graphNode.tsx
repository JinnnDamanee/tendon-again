import { CourseNodeProps } from "../Types";

export const MockRelateCourse: CourseNodeProps[] = [
    {
        courseId: 2,
        courseName: "First",
        status: 'completed',
        next: [
            {
                courseId: 3,
                courseName: "Framework",
                status: 'completed',
                next: [
                    {
                        courseId: 4,
                        courseName: "React",
                        status: 'completed',
                    },
                    {
                        courseId: 5,
                        courseName: "Vue",
                        status: 'completed',
                    },
                ]
            },
            {
                courseId: 7,
                courseName: "Language",
                status: 'completed',
                next: [
                    {
                        courseId: 8,
                        courseName: "JavaScript",
                        status: 'completed',
                    },
                    {
                        courseId: 9,
                        courseName: "TypeScript",
                        status: 'completed',
                    },
                ]
            }
        ]
    },
    {
        courseId: 6,
        courseName: "Second",
        status: 'completed',
        next: [
            {
                courseId: 7,
                courseName: "Language",
                status: 'completed',
            }
        ]
    },

    /*
    {
        courseId: 4,
        courseName: "JavaScript",
    },
    {
        courseId: 5,
        courseName: "React",
    },
    {
        courseId: 6,
        courseName: "Node.js",
    }*/
]