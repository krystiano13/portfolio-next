import Image from "next/image";

export function Pattern({ img, alt }) {
    return (
        <div className={`${alt} imgWrap appear w-[5rem] h-[5rem] absolute block`}>
            <Image className="w-full h-full" src={img} alt={alt} width={80} quality={100} />
        </div>
    )
}