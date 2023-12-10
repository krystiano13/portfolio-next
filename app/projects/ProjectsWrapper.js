'use client'

import {ProjectsData} from "@/app/projects/projectsData";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export function ProjectsWrapper() {
    const [show, setShow] = useState(-1);
    const router = useRouter();

    return (
        <>
            <ul className="ProjectList w-[50%]">
                {
                    ProjectsData.map(item => (
                        <li
                            key={item.id}
                            onClick={() => router.push(`/projects/${item.id}`)}
                            onMouseEnter={() => setShow(item.id)}
                            onMouseLeave={() => setShow(-1)}
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
                        <Image
                            key={item.id}
                            className={`${show === item.id ? "" : "imageHide"} mt-[2rem] block absolute w-full h-full object-contain transition-opacity`}
                            id={`image${item.id}`}
                            src={item.images[0]}
                            alt="gallery image"
                            width={1920}
                            height={1080}
                            quality={80}
                        />
                    ))
                }
            </div>
        </>
    )
}