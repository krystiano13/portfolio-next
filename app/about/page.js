import Link from 'next/link';
import {FancyButton} from "@/app/components/FancyButton";
import './about.css';

export default function About() {
    return (
        <main
            className="overflow-hidden w-[100vw] h-[100vh]
            flex flex-col items-center justify-center gap-[0rem] z-[1]"
        >
           <section id="about" className="text-text w-[50vw] min-w-[25rem] h-auto p-[2rem]">
               <h1 className="text-head text-[3rem] font-semibold">About Me</h1>
               <p className="text-[1.6rem] max-w-[90%] text-other ">
                   I am a graduate of a technical high school specializing in computer science.
                   After classes, I devoted myself to learning programming,
                   which became my primary hobby at that time.
                   I would like to significantly develop my skills in this field
                   by starting a career as a programmer.
               </p>
               <Link href="https://portfolio-new-three-theta.vercel.app/CV.pdf">
                   <FancyButton>My Resume</FancyButton>
               </Link>
           </section>
        </main>
    )
}