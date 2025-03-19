import SkillsSection from "./itss-kills/SkillCard"
import React from "react"
import "@/styles/gradient.css"


export default function MySkills() {
return (
    <>
    <div className="container mx-auto px-4 bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-600 p-[20px] mt-[50px] border rounded-[20px] animate-gradient-flow">
    <h1 className="text-center text-xl font-bold m-[30px]">My Skills</h1>
    <div className="">
        <SkillsSection />
    </div>
    </div>
    </>
)
}
