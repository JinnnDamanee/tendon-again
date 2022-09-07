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
        className="main-bg "
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
