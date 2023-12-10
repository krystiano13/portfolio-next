import Image from "next/image";
import Link from "next/link";
import {FancyButton} from "@/app/components/FancyButton";
import {ProjectsData} from "@/app/projects/projectsData";
import './project.css';


export default function Project({params}) {
    return (
        <main
            id="proj"
            className="w-[100vw] min-h-[30rem] h-[100vh] flex flex-col items-center justify-start"
        >
            {
                params.id < 5 ? <>
                    <h1
                        className="text-head text-[3rem] text-text font-semibold w-[60%] min-w-[25rem] relative mt-[5rem]"
                        id="ProjectTitle">
                        {ProjectsData[params.id].name}
                    </h1>
                    <div id="tags" className="w-[60%] flex items-center mt-[2rem] flex-wrap">
                        {
                            ProjectsData[params.id].techStack.map(item => (
                                <div
                                    key={item}
                                    className="text-text text-head m-[1rem] ml-[0rem] p-[0.5rem] bg-accent rounded-[1rem]"
                                >{item}</div>
                            ))
                        }
                    </div>
                    <section className="text w-[60%] h-[50%] min-h-[30rem] bg-accent mt-[2rem] text-text text-head rounded-[2rem] ">
                        <h2 className="m-[1rem] text-[2rem] h-[10%]">About Project:</h2>
                        <p className="m-[1rem] max-w-[85%] h-[65%] text-[1.3rem]" id="projectDesc">{ProjectsData[params.id].description}</p>
                        <div className="links">
                            <Link href={ProjectsData[params.id].codeLink} id="code">
                                <FancyButton>Code</FancyButton>
                            </Link>
                            <Link href={ProjectsData[params.id].liveLink} id="live">
                                <FancyButton>Live</FancyButton>
                            </Link>
                        </div>
                    </section>
                    <section className="w-[60%] image h-[50%] mt-[2rem] min-h-[35rem] bg-transparent">
                        <Image
                            className="w-full h-full object-cover"
                            src={ProjectsData[params.id].images[0]}
                            alt="screenshot"
                            width={1920}
                            height={1080}
                            id="img1"
                        />
                    </section>
                    <section className="image w-[60%] mt-[2rem] h-[50%] min-h-[35rem] bg-transparent">
                        <Image
                            className="w-full h-full object-cover"
                            src={ProjectsData[params.id].images[1]}
                            alt="screenshot"
                            width={1920}
                            height={1080}
                            id="img2"
                        />
                    </section>
                </> : <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                    <p className="text-text text-[1.1rem] text-head">This page doesn't exist</p>
                </div>
            }
        </main>
    )
}