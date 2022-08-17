import type { NextPage } from "next";
import DashBoard from "../components/Dashboard";
import ThemeToggle from "../components/ThemeToggle";

const DashBoardPage: NextPage = () => {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden "
      >
        <ThemeToggle />
        <DashBoard />
      </main>
    </>
  );
};



export default DashBoardPage;
