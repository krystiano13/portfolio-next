'use client'

import Link from "next/link";
import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const routes = [
        { href: '', name: 'Home Page' },
        { href: 'about', name: 'About' },
        { href: 'skills', name: 'Skills' },
        { href: 'projects', name: 'My Projects' },
        { href: 'contact', name: 'Contact' },
    ];

    const openMenu = () => {
        setOpen(prevState => {
            return !prevState;
        })
    }

    return (
        <>
            <nav className="flex flex-col justify-center p-[4rem] fixed w-[110vw] h-[110vh] z-[2] bg-primary">
                {
                    routes.map(item => (
                        <Link
                            className="text-head text-text cursor-pointer font-semibold
                            text-[3.25rem] m-[1rem] z-[1000] relative transition list-none"
                            href={`/${item.href}`}
                        >
                            { item.name }
                        </Link>
                    ))
                }
            </nav>
            <div>
                <div className="NavWrap relative w-[100vw] h-[5vh] min-h-[6rem] p-[2rem] flex justify-end items-center">
                    <div onClick={openMenu} className={open ? "HamburgerButton opened" : "HamburgerButton"}>
                        <div id="s1" className={open ? "stripe upStripe" : "stripe"}></div>
                        <div id="s2" className={open ? "stripe hidden" : "stripe"}></div>
                        <div id="s3" className={open ? "stripe downStripe" : "stripe"}></div>
                    </div>
                </div>
            </div>
        </>
    )
}