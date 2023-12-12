'use client'

import './form.css';

export function Form() {
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                if(data.result === true) {
                    alert("Message sent !");
                }

                else {
                    alert("Error !");
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-[80%] md:w-[50%] h-auto mt-[2rem]">
            <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Your email" type="email" name="email" />
            <input className="mt-[2rem] text-head outline-none p-[1rem] bg-primary bg-opacity-20 text-text" placeholder="Title" type="text" name="subject" />
            <textarea className="mt-[2rem] text-other outline-none p-[1rem] bg-primary bg-opacity-20 text-text min-h-[16rem] max-h-[16rem]" placeholder="Your Message" name="body"></textarea>
            <button id="submitButton" className="transition-colors mt-[2rem] p-[1rem] text-text bg-primary" type="submit">Send Message</button>
        </form>
    )
}