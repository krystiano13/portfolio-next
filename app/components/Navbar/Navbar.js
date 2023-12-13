'use client'

import Link from "next/link";
import { useState } from 'react';
import './Navbar.css';

import {routes} from "@/app/components/Navbar/routes";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(prevState => {
            return !prevState;
        })
    }

    return (
        <div className="fixed z-[1000]">
            <div className="z-[9999]">
                <div className="NavWrap w-[100vw] absolute h-[5vh] min-h-[6rem] p-[2rem] flex justify-end items-center">
                    <div onClick={openMenu} className={open ? "HamburgerButton opened z-[9999]" : "HamburgerButton z-[9999]"}>
                        <div id="s1" className={open ? "stripe upStripe" : "stripe"}></div>
                        <div id="s2" className={open ? "stripe hidden" : "stripe"}></div>
                        <div id="s3" className={open ? "stripe downStripe" : "stripe"}></div>
                    </div>
                </div>
            </div>
            <nav className={`${!open ? "navHidden" : "op"} absolute z-[2] flex flex-col justify-center p-[4rem] w-[110vw] h-[110vh] bg-primary`}>
                {
                    routes.map(item => (
                        <Link
                            onClick={() => openMenu(false)}
                            key={item.name}
                            className="text-head text-text cursor-pointer font-semibold
                            md:text-[3.25rem] text-[2.5rem] md:m-[1rem] m-[0.5rem] z-[1000] relative transition list-none"
                            href={`/${item.href}`}
                        >
                            { item.name }
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}