import React from "react";
import Sidebar from "../dashboard/navigation/Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <div className="p-8 overflow-auto">
          {children}
        </div>

      </div>

    </div>
  );
}