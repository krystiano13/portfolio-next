import {FancyButton} from "@/app/components/FancyButton";
import {Underline} from "@/app/components/Home/Underline";
import './home.css';
export default function Home() {
    return (
        <main className=" overflow-hidden w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[3rem]">
            <h1 id="homeTitle" className="text-text text-head text-center font-semibold text-[5rem] ">
                {"Hi, I'm "}
                <span>
				    Krystian Zieja
			    </span>
            </h1>
            <h2 id="homeSecondTitle" className="text-text text-other text-center text-[3rem] font-medium ">
                Web Developer
                <Underline />
            </h2>
            <div className="homeButtons flex gap-[2rem] mb-[15vh] md:mb-0">
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
