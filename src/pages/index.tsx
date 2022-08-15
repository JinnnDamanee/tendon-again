import type { NextPage } from "next";
import DashBoard from "../components/Dashboard";

const Home: NextPage = () => {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-dark shadow-2xl overflow-hidden"
      >
        <DashBoard />
      </main>
    </>
  );
};



export default Home;
