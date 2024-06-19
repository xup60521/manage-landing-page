import { Fragment } from "react/jsx-runtime";
import Nav from "./components/Nav";
import GetStartedButton from "./components/GetStartedButton";
import IllustrationIntro from "/images/illustration-intro.svg";
import Pattern from "/images/bg-tablet-pattern.svg";
import Difference from "./components/Difference";
import Said from "./components/Said";
import Footer from "./components/Footer";

// lg:px-32

export default function App() {
    return (
        <Fragment>
            <div className="w-full min-h-screen h-fit flex flex-col bg-white relative overflow-x-hidden">
                <Nav />
                <img
                    src={Pattern}
                    alt="pattern image"
                    className="absolute aspect-square lg:size-[50vw] lg:scale-100 sm:scale-100 scale-125 top-0 right-0 translate-x-[25%] md:-translate-y-[30%] z-0"
                />
                <div className="w-full flex lg:flex-row flex-col-reverse lg:px-32 items-center lg:justify-between z-10 pb-2">
                    <div className="lg:w-1/2 flex-shrink-0 flex flex-col lg:items-start items-center">
                        <h1 className="font-vietnam lg:text-left text-center lg:px-0 px-8 lg:text-[3rem] lg:leading-[3.5rem] leading-[2.75rem] font-bold lg:w-[27rem] lg:font-semibold text-[2.2rem] text-m_dark_blue    ">
                            Bring everyone together to build better products.
                        </h1>
                        <p className="font-vietnam text-m_dark_grayish_blue py-8 lg:w-[22rem] lg:px-0 px-8 lg:text-left text-center">
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
            <Said />
            <div className="lg:px-32 flex lg:flex-row flex-col gap-8 lg:justify-between items-center py-16 bg-[url('/images/bg-simplify-section-desktop.svg')] bg-m_birght_red">
                <p className="text-4xl font-vietnam text-white font-semibold lg:w-[27rem] lg:px-0 px-8 lg:text-left text-center">
                    Simplify how your team works today.
                </p>
                <button className="bg-white text-m_birght_red transition font-vietnam rounded-full px-6 py-3 text-sm font-bold hover:brightness-200">
                    Get Started
                </button>
            </div>
            <Footer />
        </Fragment>
    );
}
