import Image from 'next/image';
import { skillsData } from "@/app/skills/skillsData";
import './skills.css';
export default function Skills() {
    return (
        <main
            id="skillsWrapper"
            className="overflow-hidden w-[100vw] h-[100vh]
            flex flex-col items-center justify-center gap-[0rem] z-[1]"
        >
            <h1 className="text-head text-[3rem] text-text w-[50%] min-w-[25rem]">
                Skills
            </h1>
            <div
                className="mt-[2rem] w-[50%] min-w-[25rem] h-[70%] min-h-[30rem] p-[1rem] flex flex-wrap content-start justify-center"
                id="skills"
            >
                {skillsData.map(item =>
                    <div class="skill">
                        <Image src={item.logo} alt={item.name} width={40}/>
                        <label>{item.name}</label>
                    </div>)}
            </div>
        </main>
    )
}