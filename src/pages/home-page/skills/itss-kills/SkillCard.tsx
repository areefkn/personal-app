import React from "react";
type Skillprops = {
    skill: string;
    icon: string;
}

const SkillCard: React.FC<Skillprops> = ({skill,icon}) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img src={icon} alt={skill} className="w-12 h-12 md:w-16 md:h-16 mb-2"/>
            <div className="text-center">
                <h3 className="text-lg font-bold">{skill}</h3>
            </div>
        </div>
    );
};

const skills: Skillprops[] = [
    {skill:"JavaScript", icon:"/Assets/skills/javascript.png"},
    {skill:"TypeScript",  icon:"/Assets/skills/typescript.png"},
    {skill:"TailwindCSS", icon:"/Assets/skills/icons8-tailwindcss-500.png"},
    {skill:"React JS", icon:"/Assets/skills/react.png"},
    {skill:"Next JS", icon:"https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default"},
    {skill:"NOde JS", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Rfc_ANhyiDRYJEO0hU9lPw_lfadu_nM6rWKRqfx8xLrITFDv68_VkN7-Xoq_yWa9Gw8&usqp=CAU"},
    {skill:"Express JS", icon:"https://mitrainformatikaindonesia.co.id/wp-content/uploads/2024/06/1686391647921.png"},
    {skill:"MySQL", icon:"https://bgasparotto.com/wp-content/uploads/2015/05/mysql-logo.png"},
];

export default function SkillsSection(){
    return (
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {skills.map((item, index) =>(
                <SkillCard key={index} skill={item.skill} icon={item.icon}/>
            ))}
        </div>
    )
}
