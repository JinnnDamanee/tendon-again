import type { NextPage } from "next";
import ThemeToggle from "../components/ThemeToggle";
import Xarrow from "react-xarrows";
const TestPage: NextPage = () => {




    return (
        <>
            <main
                className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden "
            >
                <ThemeToggle />
                <span className="bg-purple-neon w-56 h-56 m-10" id='1' />
                <span className="bg-purple-neon w-56 h-56 m-10" id='2' />
                <Xarrow start={'1'} end={'2'} />
            </main>

        </>
    );
};



export default TestPage;
