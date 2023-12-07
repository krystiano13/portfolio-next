import {Ball} from "@/app/components/BackgroundElements/Ball/Ball";

export function Background() {
    return (
        <div className="fixed w-[100vw] h-[100vh] flex justify-center items-center z-[-3] pointer-events-none translate-y-[-5vh] bg-background">
            <Ball />
        </div>
    )
}