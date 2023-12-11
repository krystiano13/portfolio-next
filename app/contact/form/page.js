import {Form} from './form';

export default function ContactForm() {
    return (
        <main id="con" className="overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[0rem] z-[1]">
            <h1 className="text-head text-[3rem] text-text w-[50%] min-w-[25rem] relative ">Contact</h1>
            <Form />
        </main>
    )
}