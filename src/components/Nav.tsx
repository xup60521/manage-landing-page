import Logo from "./../logo.svg?react";
import Menu from "/images/icon-hamburger.svg";
import Close from "/images/icon-close.svg";
import GetStartedButton from "./GetStartedButton";
import { Fragment, useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            {open && (
                <div className="absolute flex px-4 lg:hidden top-32 h-full bg-gradient-to-b from-transparent to-black w-full z-50">
                    <div className="rounded-md bg-white h-fit w-full flex flex-col items-center py-8 gap-6">
                        <button className="font-vietnam text-m_dark_blue font-bold">Pricing</button>
                        <button className="font-vietnam text-m_dark_blue font-bold">Product</button>
                        <button className="font-vietnam text-m_dark_blue font-bold">About Us</button>
                        <button className="font-vietnam text-m_dark_blue font-bold">Careers</button>
                        <button className="font-vietnam text-m_dark_blue font-bold">Community</button>
                    </div>
                </div>
            )}
            <nav className="w-full lg:px-32 px-8 py-12 flex justify-between items-center text-black z-10">
                <Logo />
                <div className="lg:flex items-center gap-8 hidden">
                    <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">
                        Pricing
                    </button>
                    <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">
                        Product
                    </button>
                    <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">
                        About Us
                    </button>
                    <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">
                        Careers
                    </button>
                    <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">
                        Community
                    </button>
                </div>
                <div className="lg:block hidden">
                    <GetStartedButton />
                </div>
                <button onMouseDown={() => setOpen(!open)} className="lg:hidden">
                    {open ? (
                        <img src={Close} alt="close menu icon" />
                    ) : (
                        <img src={Menu} alt="menu icon" />
                    )}
                    {open ? (
                        <span className="sr-only">close menu button</span>
                    ) : (
                        <span className="sr-only">menu</span>
                    )}
                </button>
            </nav>
        </Fragment>
    );
}
