'use client'

import { useEffect, useState } from "react";
import './Square.css';

export function Square() {

    const [squareAnim, setSquareAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSquareAnim(true);
        }, 800);
    }, []);


    return (
        <div className={`${squareAnim && 'square-anim'} square w-[5rem] h-[5rem] bg-primary block absolute`}></div>
    )
}