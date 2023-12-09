import Link from 'next/link';
import {FancyButton} from "@/app/components/FancyButton";

export default function About() {
    return (
        <main
            className="overflow-hidden w-[100vw] h-[100vh]
            flex flex-col items-center justify-center gap-[0rem] z-[1]"
        >
           <section>
               <h1>About Me</h1>
               <p>
                   I am a graduate of a technical high school specializing in computer science.
                   After classes, I devoted myself to learning programming,
                   which became my primary hobby at that time.
                   I would like to significantly develop my skills in this field
                   by starting a career as a programmer.
               </p>
               <Link href="/">
                   <FancyButton fontSize="1.6rem">My Resume</FancyButton>
               </Link>
           </section>
        </main>
    )
}