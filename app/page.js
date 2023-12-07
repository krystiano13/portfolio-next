import {FancyButton} from "@/app/components/FancyButton";
export default function Home() {
    return (
        <main className="">
            <h1>Hi, I'm
                <span>
				Krystian Zieja
			</span>
            </h1>
            <h2>
                Web Developer
                <label id="underline">_</label>
            </h2>
            <div className="homeButtons">
                <a href="/projects">
                    <FancyButton>My Projects</FancyButton>
                </a>
                <a href="/about">
                    <FancyButton>About Me</FancyButton>
                </a>
            </div>
        </main>
    )
}
