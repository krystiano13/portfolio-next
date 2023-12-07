import {Ball} from "@/app/components/BackgroundElements/Ball/Ball";
import {Square} from "@/app/components/BackgroundElements/Square/Square";
import {Triangle} from "@/app/components/BackgroundElements/Triangle/Triangle";
import {Circle} from "@/app/components/BackgroundElements/Circle/Circle";
import {Circle2} from "@/app/components/BackgroundElements/Circle2/Circle";
import {Pattern} from "@/app/components/BackgroundElements/Pattern/Pattern";

//Images
import customSrc from '../assets/custom.png';
import patternSrc from '../assets/pattern.png';

export function Background() {
    return (
        <div className="fixed w-[100vw] h-[100vh] flex justify-center items-center z-[-3] pointer-events-none bg-background">
            <Ball />
            <Square />
            <Triangle />
            <Circle />
            <Circle2 />
            <Pattern img={customSrc} alt="custom" />
            <Pattern img={patternSrc} alt="pattern" />
        </div>
    )
}