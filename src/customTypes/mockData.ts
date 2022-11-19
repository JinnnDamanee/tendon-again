import { LearningNode } from "./tendonAPItype"
export const mockLearningNode: LearningNode = {
    type: "briefLearningNode",
    id: "string",
    attributes: {
        learningNodeName: "React Test Name",
        learningNodeDescription: "string",
        curriculums: [
            {
                "type": "briefCurriculum",
                "id": "63173c3f997fd51cea50fb32",
                "attributes": {
                    "curriculumName": "Gen physics",
                    "curriculumDescription": "University physics for year 1",
                    "accessLevel": "public",
                    "proGress": 79
                }
            }
        ],
        subNode: [
            {
                name: "TEST PDF",
                type: "pdfNode",
                id: "string",
                attributes: {
                    "priority": "require",
                    "size": 0,
                    "resources": "/resources/pdf/1234"
                }
            },
            {
                name: "TEST VIDEO",
                type: "videoNode",
                id: "string",
                attributes: {
                    "priority": "require",
                    "size": 0,
                    "resources": "/resources/pdf/1234"
                }
            },
            {
                name: "TEST TEXT",
                type: "textNode",
                id: "string",
                attributes: {
                    "priority": "require",
                    "size": 0,
                    "resources": "/resources/pdf/1234"
                }
            },
            {
                name: "TEST IMAGE",
                type: "imageNode",
                id: "string",
                attributes: {
                    "priority": "require",
                    "size": 0,
                    "resources": "/resources/pdf/1234"
                }
            },
            {
                name: "TEST SOUND",
                type: "soundNode",
                id: "string",
                attributes: {
                    "priority": "require",
                    "size": 0,
                    "resources": "/resources/pdf/1234"
                }
            }
        ],
        nextLearningNodeId: [
            {
                type: "briefLearningNode",
                id: "string",
                attributes: {
                    curriculums: [
                        {
                            type: "briefCurriculum",
                            id: "63173c3f997fd51cea50fb32",
                            attributes: {
                                curriculumName: "Gen physics",
                                curriculumDescription: "University physics for year 1",
                                accessLevel: "public",
                                proGress: 79
                            }
                        }
                    ],
                    learningNodeName: "string",
                    learningNodeDescription: "string"
                }
            }
        ],
        previousLearningNodeId: [
            {
                type: "briefLearningNode",
                id: "string",
                attributes: {
                    curriculums: [
                        {
                            type: "briefCurriculum",
                            id: "63173c3f997fd51cea50fb32",
                            attributes: {
                                curriculumName: "Gen physics",
                                curriculumDescription: "University physics for year 1",
                                accessLevel: "public",
                                proGress: 79
                            }
                        }
                    ],
                    learningNodeName: "string",
                    learningNodeDescription: "string"
                }
            }
        ]
    }
}