'use client'

export function Form() {
    return (
        <form className="flex flex-col w-[80%] md:w-[50%] h-auto mt-[2rem]">
            <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Your email" type="email" name="email" />
            <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Title" type="text" name="title" />
            <textarea className="mt-[2rem] text-other outline-none p-[1rem] bg-primary bg-opacity-20 text-text min-h-[18rem] max-h-[18rem]" placeholder="Your Message" name="message"></textarea>
        </form>
    )
}