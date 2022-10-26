import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "@baseComponents/LoadingSpinner";
import MainLayout from "@components/Layout/MainLayout";
const DashBoard = dynamic(() => import("../components/Dashboard"), { suspense: true });

const DashBoardPage: NextPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        < DashBoard />
      </Suspense>
    </MainLayout>
  );
};



export default DashBoardPage;
