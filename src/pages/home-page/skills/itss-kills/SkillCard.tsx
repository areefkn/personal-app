import React from "react";
import "@/styles/carousel.css";
type SkillProps = {
    skill: string;
    icon: string;
}

const SkillCard: React.FC<SkillProps> = ({skill,icon}) => {
    return (
        <div className="flex flex-col items-center p-5 sm:p-6 bg-white shadow-md rounded-3xl hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
            <img src={icon} alt={skill} className="w-16 h-16 md:w-20 md:h-20 mb-3 transition-transform duration-300 hover:rotate-6"/>
            <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold">{skill}</h3>
            </div>
        </div>
    );
};

const skills: SkillProps[] = [
    {skill:"HTML", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"},
    {skill:"JavaScript", icon:"/Assets/skills/javascript.png"},
    {skill:"TypeScript",  icon:"/Assets/skills/typescript.png"},
    {skill:"TailwindCSS", icon:"/Assets/skills/icons8-tailwindcss-500.png"},
    {skill:"React JS", icon:"/Assets/skills/react.png"},
    {skill:"Next JS", icon:"https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default"},
    {skill:"Node JS", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Rfc_ANhyiDRYJEO0hU9lPw_lfadu_nM6rWKRqfx8xLrITFDv68_VkN7-Xoq_yWa9Gw8&usqp=CAU"},
    {skill:"Express JS", icon:"https://mitrainformatikaindonesia.co.id/wp-content/uploads/2024/06/1686391647921.png"},
    {skill:"MySQL", icon:"https://bgasparotto.com/wp-content/uploads/2015/05/mysql-logo.png"},
    {skill:"GitHub", icon:"https://researchcomputing.princeton.edu/sites/g/files/toruqf7036/files/styles/freeform_750w/public/2021-02/Github.png?h=0adafebd&itok=ifc6IOIP"},
];

export default function SkillsSection(){
    return (
        <div className="p-4">
            {/* Mobile view with carousel effect */}
            <div className="flex overflow-hidden sm:hidden">
                <div className="flex animate-carousel space-x-6 py-4">
                    {skills.map((item, index) =>(
                        <div key={index} className="min-w-[180px]">
                            <SkillCard skill={item.skill} icon={item.icon}/>
                        </div>
                    ))}
                    {/* Duplicate items for seamless looping */}
                    {skills.map((item, index) =>(
                        <div key={`duplicate-${index}`} className="min-w-[180px]">
                            <SkillCard skill={item.skill} icon={item.icon}/>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop view with grid layout */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((item, index) =>(
                    <SkillCard key={index} skill={item.skill} icon={item.icon}/>
                ))}
            </div>
        </div>
    )
}
