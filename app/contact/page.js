import Image from 'next/image';
import Link from "next/link";

//icons
import linkedin from '../assets/contactIcons/linkedin.png';
import github from '../assets/contactIcons/github.png';
import mail from '../assets/contactIcons/gmail.png';

export default function Contact () {
    return (
        <main className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            <h1>Contact</h1>
            <section className="contactOption">
                <Link id="mail" href="mailto:crystianotv@gmail.com" className="contactOption__el">
                    <Image src={mail} alt="mail"/>
                    <p>mail</p>
                    <p id="address" className="hidden">crystianotv@gmail.com</p>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/krystiano13"
                   className="contactOption__el">
                    <Image src={github} alt="github"/>
                    <p>Github</p>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krystian-zieja-1b9902253/"
                   className="contactOption__el">
                    <Image src={linkedin} alt="linkedin"/>
                    <p>Linkedin</p>
                </Link>
            </section>
        </main>
    )
}