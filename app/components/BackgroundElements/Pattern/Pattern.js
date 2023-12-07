'use client'

import './Pattern.css';
import Image from "next/image";
import { useEffect, useState } from "react";

export function Pattern({ img, alt, delay }) {

    const [patternAnim, setPatternAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPatternAnim(true);
        }, delay);
    }, []);


    return (
        <div className={`${alt} ${patternAnim && `${alt}-anim`} imgWrap appear w-[5rem] h-[5rem] absolute block`}>
            <Image className="w-full h-full" src={img} alt={alt} width={80} quality={100} />
        </div>
    )
}