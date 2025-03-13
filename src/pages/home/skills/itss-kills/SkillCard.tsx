import React from "react";
type Skillprops = {
    skill: string;
    level: string;
    icon: string;
}

const SkillCard: React.FC<Skillprops> = ({skill, level, icon}) => {
    return (
        <div className="bg-white shadow-lg rounded-md p-6 flex flex-col items-center gap-4 border h-full transition-transform transform hover:scale-105">
            <img src={icon} alt={skill} className="w-16 h-16 mb-4 object-contain"/>
            <div className="text-center">
                <h3 className="text-lg font-bold">{skill}</h3>
                <p className="text-gray-600">{level}</p>
            </div>
        </div>
    );
};

const skills: Skillprops[] = [
    {skill:"JavaScript", level:"Advanced", icon:"/Assets/skills/javascript.png"},
    {skill:"TypeScript", level:"Intermediate", icon:"/Assets/skills/typescript.png"},
    {skill:"TailwindCSS", level:"Intermediate", icon:"/Assets/skills/tailwind.png"},
    {skill:"React JS", level:"Intermediate", icon:"/Assets/skills/react.png"},
    {skill:"Next JS", level:"Intermediate", icon:"/Assets/skills/nextjs.png"},
];

export default function SkillsSection(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {skills.map((item, index) =>(
                <SkillCard key={index} skill={item.skill} level={item.level} icon={item.icon}/>
            ))}
        </div>
    )
}
