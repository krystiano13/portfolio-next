import Image from "next/image";
import {FancyButton} from "@/app/components/FancyButton";
import {ProjectsData} from "@/app/projects/projectsData";
import './project.css';


export default function Project({params}) {
    return (
        <main
            id="proj"
            className="w-[100vw] min-h-[30rem] h-[100vh] flex flex-col items-center justify-start"
        >
            <h1
                className="text-head text-[3rem] text-text font-semibold w-[60%] min-w-[25rem] relative mt-[5rem]"
                id="ProjectTitle">
                {ProjectsData[params.id].name}
            </h1>
            <div id="tags" className="w-[60%] flex items-center mt-[2rem] flex-wrap">
                {
                    ProjectsData[params.id].techStack.map(item => (
                        <div
                            className="text-text text-head m-[1rem] ml-[0rem] p-[0.5rem] bg-accent rounded-[1rem]"
                        >{item}</div>
                    ))
                }
            </div>
            <section className="text">
                <h2>About Project:</h2>
                <p id="projectDesc">{ProjectsData[params.id].description}</p>
                <div className="links">
                    <a id="code">
                        <FancyButton>Code</FancyButton>
                    </a>
                    <a id="live">
                        <FancyButton>Live</FancyButton>
                    </a>
                </div>
            </section>
            <section className="image">
                <Image
                    src={ProjectsData[params.id].images[0]}
                    alt="screenshot"
                    width={1920}
                    height={1080}
                    id="img1"
                />
            </section>
            <section className="image">
                <Image
                    src={ProjectsData[params.id].images[1]}
                    alt="screenshot"
                    width={1920}
                    height={1080}
                    id="img2"
                />
            </section>
        </main>
    )
}