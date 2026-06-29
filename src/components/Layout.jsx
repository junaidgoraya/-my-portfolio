import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <main className="flex-1 ml-0 lg:ml-64 p-4 sm:p-6 md:p-8 lg:p-16 min-h-screen transition-all duration-300">
                <Outlet />
            </main>
        </div>
    );
}
