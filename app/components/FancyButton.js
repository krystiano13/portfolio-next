export function FancyButton({ children }) {
    return (
        <button
            id="fancy"
            type="button"
            className="block font-medium bg-transparent border-0 text-head text-text cursor-pointer text-[1.4rem] relative pt-[1rem] transition z-0"
        >
            { children }
        </button>
    )
}