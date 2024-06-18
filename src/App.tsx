import { Fragment } from "react/jsx-runtime";
import Nav from "./components/Nav";
import GetStartedButton from "./components/GetStartedButton";
import IllustrationIntro from "/images/illustration-intro.svg";
import Pattern from "/images/bg-tablet-pattern.svg"
import Difference from "./components/Difference";

// lg:px-32

export default function App() {
    return (
        <Fragment>
            <div className="w-full min-h-screen h-fit flex flex-col bg-white relative overflow-x-hidden">
                <Nav />
                <img src={Pattern} alt="pattern image" className="absolute aspect-square size-[50vw] top-0 right-0 translate-x-[25%] -translate-y-[30%] z-0" />
                <div className="w-full flex lg:px-32 items-center justify-between z-10">
                    <div className="w-1/2 flex-shrink-0 flex flex-col">
                        <h1 className="font-vietnam lg:text-[3rem] lg:leading-[3.5rem] lg:w-[27rem] font-semibold text-3xl text-m_dark_blue    ">
                            Bring everyone together to build better products.
                        </h1>
                        <p className="font-vietnam text-m_dark_grayish_blue py-8 lg:w-[22rem]">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals
                            in view.
                        </p>
                        <GetStartedButton />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={IllustrationIntro} alt="illustration" />
                    </div>
                </div>
            </div>
            <Difference />
            <footer></footer>
        </Fragment>
    );
}
