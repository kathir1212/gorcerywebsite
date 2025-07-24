import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Upload } from "./upload";

export const Admin = () => {
    const location = useLocation();

    const dashboardicon = (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5..." />
        </svg>
    );

    const overviewicon = (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.111 20..." />
        </svg>
    );

    const chaticon = (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9h5..." />
        </svg>
    );

    const sidebarLinks = [
        { name: "Add-products", path: "/admin/upload", icon: overviewicon },
        { name: "All products", path: "/admin/ad-allproduct", icon: chaticon },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="md:w-64 w-16 border-r h-screen text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={`flex items-center py-3 px-4 gap-3
                            ${location.pathname === item.path
                                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 text-gray-700"
                            }`}
                    >
                        {item.icon}
                        <p className="md:block hidden">{item.name}</p>
                    </Link>
                ))}
            </div>

            {/* Right Content */}
            <div className="flex-1 bg-white p-4 overflow-y-auto">
                
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
