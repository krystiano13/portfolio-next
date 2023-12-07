import {FancyButton} from "@/app/components/FancyButton";
import './home.css';
export default function Home() {
    return (
        <main className="overflow-hidden ">
            <h1 id="homeTitle" className="text-text text-head text-center font-semibold text-[5rem] ">
                {"Hi, I'm "}
                <span>
				    Krystian Zieja
			    </span>
            </h1>
            <h2 id="homeSecondTitle" className="text-text text-other text-center text-[3rem] font-medium ">
                Web Developer
                <label id="underline">_</label>
            </h2>
            <div className="homeButtons flex gap-[2rem] sm:mb-[15vh]">
                <a className="decoration-0" href="/projects">
                    <FancyButton>My Projects</FancyButton>
                </a>
                <a className="decoration-0" href="/about">
                    <FancyButton>About Me</FancyButton>
                </a>
            </div>
        </main>
    )
}
