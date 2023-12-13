'use client'

import './form.css';
import {Loader} from "@/app/components/Loader/Loader";
import { useState } from "react";

export function Form() {

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [success,setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = new FormData(e.target);

        await fetch(
            'https://portfolio-backend-phi-azure.vercel.app/api/index.php',
            {
                method: "POST",
                body: data
            }
        )
            .then(res => res.json())
            .then(data => {
                setSent(true);

                if(data.result === true) {
                    setSuccess(true);
                }

                else {
                    setSuccess(false);
                }

            })
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-[80%] md:w-[50%] h-auto mt-[2rem]">
            {
                (loading === false && sent === false) &&
                <>
                    <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Your email" type="email" name="email" />
                    <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Title" type="text" name="subject" />
                    <textarea className="mt-[2rem] text-other outline-none p-[1rem] bg-primary bg-opacity-20 text-text min-h-[12rem] max-h-[12rem] md:min-h-[16rem] md:max-h-[16rem]" placeholder="Your Message" name="body"></textarea>
                    <button id="submitButton" className="transition-colors mt-[2rem] p-[1rem] text-text bg-primary" type="submit">Send Message</button>
                </>
            }
            {
                loading === true &&
                <div className="w-[100%] h-[25rem] flex justify-center items-center">
                    <Loader />
                </div>
            }
            {
                ((sent === true && success === true) && loading === false) &&
                <p className="info text-center text-text text-head text-[2rem] text-medium">Message was sent successfully</p>
            }
            {
                ((sent === true && success === false) && loading === false) &&
                <p className="info text-center text-text text-head text-[2rem] text-medium">Something went wrong</p>
            }
        </form>
    )
}