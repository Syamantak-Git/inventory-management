"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed)
    const toggleSidebar = ()=> {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }
    const sidebarClassNames = `flex fixed flex-col ${isSidebarCollapsed?"w-0 md:w16":"w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>LOGO</div>
        <h1 className="font-extrabold text-2xl">iStock</h1>
        <button
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="grow mt-8">
        {/* Links Here */}
      </div>
      {/* FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2026 iStock</p>
      </div>
    </div>
  );
};

export default Sidebar;
