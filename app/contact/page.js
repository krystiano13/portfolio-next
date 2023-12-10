import Image from 'next/image';
import Link from "next/link";

import './contact.css';
import {links} from "@/app/contact/links";

export default function Contact () {
    return (
        <main className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            <h1>Contact</h1>
            <section className="contactOption w-[50%] min-w-[25rem] mt-[5rem] flex justify-between items-center">
                {
                    links.map(item => (
                        <Link rel={item.noopener && 'noopener noreferrer'} target={item.blank && '_blank'} key={item.id} id="mail" href={item.href}
                              className="element w-[30%] h-[20%] min-h-[12rem] border-solid border-2 border-text rounded-2xl flex flex-col items-center justify-center cursor-pointer transition decoration-0"
                        >
                            <Image src={item.src} alt={item.alt}/>
                            <p>{item.name}</p>
                        </Link>
                    ))
                }
            </section>
        </main>
    )
}