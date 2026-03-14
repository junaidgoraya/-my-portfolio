import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 md:p-16 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}
