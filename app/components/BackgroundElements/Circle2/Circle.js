'use client'

import { useEffect, useState } from "react";
import './Circle2.css';

export function Circle2() {

    const [circleAnim, setCircleAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCircleAnim(true);
        }, 750);
    }, []);


    return (
        <div className={`${circleAnim && 'circle-2-anim'} circle2 appear w-[3rem] h-[3rem] box-border rounded-full opacity-70 absolute border-text border-solid border-[0.75rem]`}></div>
    )
}