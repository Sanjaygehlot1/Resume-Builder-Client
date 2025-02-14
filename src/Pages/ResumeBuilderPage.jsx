import React,{ useState } from "react";
import { Progress } from "@/components/ui/progress";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function ResumeBuilder() {

    const [progress] = useState(30);
    
    return (
        <div className="flex w-full min-h-screen">
            <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col gap-4">
                <h2 className="text-xl font-semibold">ProCV</h2>
                <ul className="space-y-2">
                    {["Personal Details", "Education", "Professional Experience", "Skills","Projects", "Summary", "Finalize"].map((step, index) => (
                        <NavLink to={`/create/${step.toLowerCase().replace(/ /g, "-")}`} key={index} className={({ isActive }) =>
                            `flex items-center gap-2 p-2 rounded-xl ${isActive ? "bg-orange-500 text-white" : "text-white"}`
                        }>
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-900 font-bold">
                                {index + 1}
                            </span>
                            {step}
                        </NavLink>
                    ))}
                </ul>
                <div className="mt-auto">
                    <p className="text-sm">Resume Completeness:</p>
                    <Progress value={progress} className="h-2 mt-1" />
                </div>
            </aside>
                    <Outlet/>
           
        </div>
    );
}
