'use client'

import Link from "next/link";
import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(prevState => {
            return !prevState;
        })
    }

    return (
        <>
            <nav>
                <Link href="/">Home Page</Link>
                <Link href="/">About</Link>
                <Link href="/">Skills</Link>
                <Link href="/">My Projects</Link>
                <Link href="/">Contact</Link>
            </nav>
            <div>
                <div>
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