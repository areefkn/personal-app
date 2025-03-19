import SkillsSection from "./itss-kills/SkillCard"

export default function MySkills() {
return (
    <>
    <div className="container mx-auto px-4 bg-white p-[20px] mt-[50px] border rounded-[20px]"> 
        <h1 className="text-center text-xl font-bold m-[30px]">My Skills</h1>
        <div className="">
        <SkillsSection/>
        </div>
    </div>
    </>
)
}
