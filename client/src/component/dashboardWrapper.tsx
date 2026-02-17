import React from "react";
import Navbar from "@/component/navbar";
import Sidebar from "@/component/sidebar";

type Props = {};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar/>
      <main
        className={`flex-col flex w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
