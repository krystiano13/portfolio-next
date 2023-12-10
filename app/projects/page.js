import './projects.css';
import {ProjectsData} from "@/app/projects/projectsData";

export default function Projects() {
    return (
        <main id="projects" className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            <h1 className="text-head text-text text-[3rem] w-[60%] min-w-[25rem] relative mt-[3rem]">
                My Projects
            </h1>
            <div className="ProjectsWrapper w-[60%] h-auto min-h-[20rem] flex justify-between">
                <ul className="ProjectList w-[50%]">
                    {
                        ProjectsData.map(item => (
                            <li
                                className="listItem text-text text-head list-none text-[2rem] mt-[2rem]
                                cursor-pointer w-[80%] border-b-solid border-b-text border-b-2"
                                id={item.id.toString()}>
                                {item.name}</li>
                        ))
                    }
                </ul>
                <div className="ProjectShowcase w-[50%] relative">
                    {
                        ProjectsData.map(item => (
                            <img
                                className="imageHide mt-[2rem] block absolute w-full h-full object-contain transition-opacity"
                                id={`image${item.id}`}
                                src={item.images[0]}
                                alt="gallery image"
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}