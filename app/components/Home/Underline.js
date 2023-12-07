'use client'

import { useState, useEffect } from "react";

export function Underline() {
    const [underline, setUnderline] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setUnderline(prev => !prev);
        },500);
        return () => clearInterval(interval);
    },[]);

    return (
        <label className={underline ? 'opacity-100' : 'opacity-0'}>_</label>
    )
}