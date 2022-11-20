import useLocalStorage from "hooks/useLocalStorage";
import React, { createContext, useContext, useEffect, useState } from "react";

type path = {
    name: string;
    link: string;
}

type providedValueProp = {
    pathList: path[],
    setPathList: React.Dispatch<React.SetStateAction<path[]>>
}

const defaultProps = {
    pathList: [],
    setPathList: () => { }
}

const useBreadCrumb = (): providedValueProp => {
    const context = useContext(breadcrumbContext);
    if (context === undefined) {
        console.log('useBreadCrumb must be used within a BreadcrumbProvider');
        throw new Error('useBreadCrumb must be used within a BreadcrumbProvider');
    }
    return context;
}

const breadcrumbContext = createContext<providedValueProp>(defaultProps);

type breadcrumbProviderProps = {
    children: React.ReactNode
}

const BreadcrumbProvider = ({ children }: breadcrumbProviderProps) => {
    const [pathList, setPathList] = useState<path[]>([]);

    const providedValue = {
        pathList,
        setPathList
    }
    return (
        <breadcrumbContext.Provider value={providedValue}>
            {children}
        </breadcrumbContext.Provider>
    )
}

export { useBreadCrumb, BreadcrumbProvider }