'use client'

import { useEffect, useState } from 'react';
import './Ball.css';

export function Ball() {
    const [ballAnim, setBallAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBallAnim(true);
        }, 450);
    }, []);

    return (
        <div className={`${ballAnim && 'ball-anim'} ball w-[3rem] h-[3rem] bg-accent absolute rounded-full`}>

        </div>
    )
};