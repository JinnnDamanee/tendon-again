import React, { createContext, ReactComponentElement, ReactNode, useContext, useState } from "react";
import { CourseNodeProps } from "./CourseNode";

interface ICourseContext {
    addCourseToMap: (newCourse: CourseNodeProps) => void
    isCourseInMap: (checkCourse: CourseNodeProps) => boolean
}
const defaultContext = {
    addCourseToMap: () => { },
    isCourseInMap: () => false
}
const courseContext = createContext<ICourseContext>(defaultContext)

const useCourse = () => useContext(courseContext);

const defaultCourse: CourseNodeProps = {
    CourseId: 0,
    CourseName: "Root",
    next: [],
    setChildReady: () => { }
}

const CourseProvider = ({ children }: any) => {
    const [courseData, setCourseData] = useState<CourseNodeProps[]>([defaultCourse])

    const addCourseToMap = (newCourse: CourseNodeProps) => {
        setCourseData([...courseData, newCourse])
    }
    const isCourseInMap = (checkCourse: CourseNodeProps) => {
        return courseData.some((item: CourseNodeProps) => item.CourseId === checkCourse.CourseId)
    }

    return (
        <courseContext.Provider value={{
            addCourseToMap,
            isCourseInMap
        }}>
            {children}
        </courseContext.Provider>
    )
}

export {
    useCourse,
    CourseProvider
}