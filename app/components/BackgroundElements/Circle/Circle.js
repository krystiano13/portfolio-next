'use client'

import { useEffect, useState } from "react";
import './Circle.css';

export function Circle() {

    const [circleAnim, setCircleAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCircleAnim(true);
        }, 450);
    }, []);


    return (
        <div className={`${circleAnim && 'circle-anim'} circle appear w-[3rem] h-[3rem] box-border rounded-full opacity-70 absolute border-text border-solid border-[0.75rem]`}></div>
    )
}