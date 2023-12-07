import {Ball} from "@/app/components/BackgroundElements/Ball/Ball";
import {Square} from "@/app/components/BackgroundElements/Square/Square";
import {Triangle} from "@/app/components/BackgroundElements/Triangle/Triangle";

export function Background() {
    return (
        <div className="fixed w-[100vw] h-[100vh] flex justify-center items-center z-[-3] pointer-events-none translate-y-[-5vh] bg-background">
            <Ball />
            <Square />
            <Triangle />
        </div>
    )
}