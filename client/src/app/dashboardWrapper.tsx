import React from "react";
import Navbar from "./(components)/Navbar";
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`bg-gray-50 flex text-gray-900 w-full min-h-screen`}>
      Sidebar
      <main className={`flex flex-col w-full py-7 px-9 bg-gray-50 md:pl-24`}>
        <Navbar/>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
