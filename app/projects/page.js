import './projects.css';
import {ProjectsWrapper} from "@/app/projects/ProjectsWrapper";

export default function Projects() {
    return (
        <main id="projects" className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            <h1 className="text-head text-text text-[3rem] w-[60%] min-w-[25rem] relative mt-[3rem]">
                My Projects
            </h1>
            <div className="ProjectsWrapper w-[60%] h-auto min-h-[20rem] flex justify-between">
               <ProjectsWrapper />
            </div>
        </main>
    )
}