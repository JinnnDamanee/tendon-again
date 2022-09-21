import React, { createContext, useContext, useState } from "react";

interface ICourseContext {
    addCourseToMap: (courseId: number, renderId: number) => void
    isRender: (renderId: number) => boolean
    // isCourseInMap: (checkCourse: RenderCourseProps) => boolean
}
const defaultContext = {
    addCourseToMap: () => { },
    isRender: () => false,
    // isCourseInMap: () => false,
}
const courseContext = createContext<ICourseContext>(defaultContext)

const useCourse = () => useContext(courseContext);

const defaultCourse: IcheckingProp = {
    renderId: 0,
    courseId: 0,
    isRender: false,
}

interface IcheckingProp {
    renderId: number
    courseId: number
    isRender: boolean
}

/*
    Duplitcate Node when 
    courseId is the same
    but renderId is not the same

    we'll not render the node

    For example,
    A rid = 1 cid = 1
    B rid = 2 cid = 1
    C rid = 3 cid = 2

    A is rendered
    B is not rendered
*/


const CourseProvider = ({ children }: any) => {
    const [renderCourseHistory, setRenderCourseHistory] = useState<IcheckingProp[]>([defaultCourse])

    const isCourseInMap = (checkCourseId: number): boolean => {
        return renderCourseHistory.some(node => node.courseId === checkCourseId)
    }
    const addCourseToMap = (courseId: number, renderId: number) => {
        if (!isCourseInMap(courseId)) {
            console.log('add course to map ' + courseId + ' True');
            setRenderCourseHistory(prev => [...prev, { renderId: renderId, courseId: courseId, isRender: true }])
        } else {
            console.log('add course to map ' + courseId + ' False');
            setRenderCourseHistory(prev => [...prev, { renderId: renderId, courseId: courseId, isRender: false }])
        }
        // console.log('Course Id : ' + courseId + " " + isCourseInMap(courseId));
        console.log(renderCourseHistory);
    }
    const isRender = (renderId: number): boolean => {
        return renderCourseHistory.find(node => node.renderId === renderId)?.isRender || false
    }

    return (
        <courseContext.Provider value={{
            // isCourseInMap,
            addCourseToMap,
            isRender,
        }}>
            {children}
        </courseContext.Provider>
    )
}

export {
    useCourse,
    CourseProvider
}