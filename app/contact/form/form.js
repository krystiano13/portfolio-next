'use client'

export function Form() {
    return (
        <form>
            <input placeholder="Your email" type="email" name="email" />
            <input placeholder="Title" type="text" name="title" />
            <textarea placeholder="Your Message" name="message"></textarea>
        </form>
    )
}