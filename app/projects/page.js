'use client'

import './projects.css';
import {ProjectsWrapper} from "@/app/projects/ProjectsWrapper";
import { useState } from "react";
import {Loader} from "@/app/components/Loader/Loader";

export default function Projects() {

    const [loading, setLoading] = useState(false);

    return (
        <main id="projects" className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            {
                loading === false &&
                <>
                    <h1 className="font-semibold text-head text-text text-[3rem] w-[60%] min-w-[25rem] relative mt-[3rem]">
                        My Projects
                    </h1>
                    <div className="ProjectsWrapper w-[60%] h-auto min-h-[20rem] flex justify-between">
                        <ProjectsWrapper startLoading={() => setLoading(true)} />
                    </div>
                </>
            }
            {
                loading === true && <Loader />
            }
        </main>
    )
}