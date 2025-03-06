import React from "react";
type Skillprops = {
    skill: string;
    level: string;
    icon: string;
}

const SkillCard: React.FC<Skillprops> = ({skill, level, icon}) => {
    return (
        <div className="bg-white shadow-lg rounded-md p-6 flex h-  flex-col items-center gap-4 size-50 border">
            <img src={icon} alt={skill}  className="w-16  h-16 bm-4 object-contain"/>
            <div>
                <h3 className="text-lg font-bold">{skill}</h3>
                <p className="text-gray-600">{level}</p>
            </div>
        </div>
    );
};

const skills: Skillprops[] =[
    {skill:"JavaScript", level:"Advanced",icon:"Assets/skills/javascript.png"},
    {skill:"TypeScript", level:"Intermediate",icon:"Assets/skills/typescript.png"},
    {skill:"TailwindCSS", level:"Intermediate",icon:"/"},
    {skill:"React JS", level:"Intermadiate",icon:"Assets/skills/react.png"},
    {skill:"Next JS", level:"Intermediate",icon:"/"},
];

export default function SkillsSection(){
    return (
        <div className="grid grid-cols-4 gap-4 ">
            {skills.map((item, index) =>(
                <SkillCard key={index} skill={item.skill} level={item.level} icon={item.icon}/>
            ))}
        </div>
    )
}