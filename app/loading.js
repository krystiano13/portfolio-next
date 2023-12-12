import {Loader} from "@/app/components/Loader/Loader";

export default function Loading() {
    return (
        <div className="loader w-full h-full flex justify-center items-center">
            <Loader />
        </div>
    )
}