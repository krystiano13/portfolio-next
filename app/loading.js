import {Loader} from "@/app/components/Loader/Loader";

export default function Loading() {
    return (
        <div className="loader w-[100vw] h-[100vh] flex justify-center items-center">
            <Loader />
        </div>
    )
}