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
            <h1 className="font-semibold text-head text-[3rem] text-text w-[20%] ml-20 lg:w-[45%] md:ml-0 min-w-[25rem]">
                Skills
            </h1>
            <div
                className="mt-[2rem] w-[50%] min-w-[25rem] h-[70%] min-h-[30rem] p-[1rem] flex flex-wrap content-start justify-center"
                id="skills"
            >
                {skillsData.map(item =>
                    <div
                        className="skill border-2 border-solid border-text m-[0.6rem]
                        cursor-pointer transition flex flex-col justify-center items-center rounded-2xl
                        bg-primary bg-opacity-10"
                        key={item.name}
                    >
                        <Image quality={100} className="w-[60%] h-[70%] object-contain" src={item.logo} alt={item.name}/>
                        <label className="font-medium w-full h-[20%] text-center text-head text-text mt-[0.25rem] text-[0.9rem] pointer-events-none">
                            {item.name}
                        </label>
                    </div>)}
            </div>
        </main>
    )
}