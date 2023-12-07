'use client'

import { useEffect, useState } from 'react';
import './Triangle.css';

export function Triangle() {

    const [triangleAnim, setTriangleAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTriangleAnim(true);
        }, 700);
    }, []);

    return (
        <div className={`${triangleAnim && 'triangle-anim'} triangle border-solid absolute`}></div>
    )
};