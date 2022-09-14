export const MockRelateCourse: any[] = [
    {
        courseId: 2,
        courseName: "First",
        next: [
            {
                courseId: 3,
                courseName: "Framework",
                next: [
                    {
                        courseId: 4,
                        courseName: "React",
                    },
                    {
                        courseId: 5,
                        courseName: "Vue",
                    },
                ]
            },
            {
                courseId: 7,
                courseName: "Language",
                next: [
                    {
                        courseId: 8,
                        courseName: "JavaScript",
                    },
                    {
                        courseId: 9,
                        courseName: "TypeScript",
                    },
                ]
            }
        ]
    },
    {
        courseId: 6,
        courseName: "Second",
        next: [
            {
                courseId: 7,
                courseName: "Language",
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