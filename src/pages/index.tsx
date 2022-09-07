import type { NextPage } from "next";
// import DashBoard from "../components/Dashboard";
import ThemeToggle from "../components/ThemeToggle";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
const DashBoard = dynamic(() => import("../components/Dashboard"), { suspense: true });
// import DashBoard from "../components/Dashboard";

const DashBoardPage: NextPage = () => {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden "
      >
        <ThemeToggle />
        <Suspense fallback={<LoadingSpinner />}>
          < DashBoard />
        </Suspense>
      </main>
    </>
  );
};



export default DashBoardPage;
