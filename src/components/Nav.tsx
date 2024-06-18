import Logo from "./../logo.svg?react";
import GetStartedButton from "./GetStartedButton";

export default function Nav() {
    return (
        <nav className="w-full lg:px-32 py-12 flex justify-between items-center text-black z-10">
            <Logo />
            <div className="flex items-center gap-8">
                <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">Pricing</button>
                <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">Product</button>
                <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">About Us</button>
                <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">Careers</button>
                <button className="text-sm font-vietnam text-m_dark_blue transition hover:text-m_dark_grayish_blue">Community</button>
            </div>
            <GetStartedButton />
        </nav>
    );
}
