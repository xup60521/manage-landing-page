import { useEffect, useState } from "react";
import Logo from "../logo.svg?react";
import {
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
export default function Footer() {
    const [input, setInput] = useState("");
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!input) {
            setIsError(false);
            return;
        }
        if (regex.test(input)) {
            console.log(regex.test(input));
            setIsError(false);
            return;
        }
        if (!regex.test(input)) {
            setIsError(true);
            return;
        }
    }, [input]);
    return (
        <footer className="lg:px-32 py-12 flex items-center lg:flex-row flex-col-reverse bg-m_very_dark_blue">
            <span className="text-xs font-vietnam text-m_dark_grayish_blue lg:hidden pt-8">
                Copyright 2020. All Rights Reserved
            </span>
            <div className="flex lg:flex-col flex-col-reverse gap-16 lg:items-start items-center">
                <div className="h-fit  overflow-hidden relative flex items-center gap-1 -translate-y-3 lg:scale-100 scale-125">
                    <Logo className="size-4" />
                    <span className="font-vietnam -translate-y-[2px] text-white text-2xl font-semibold">
                        manage
                    </span>
                </div>
                <div className="flex items-center gap-3 lg:scale-100 scale-150">
                    <FaFacebook className="size-5 transition hover:text-m_birght_red text-white cursor-pointer" />
                    <FaYoutube className="size-5 transition hover:text-m_birght_red text-white cursor-pointer" />
                    <FaTwitter className="size-5 transition hover:text-m_birght_red text-white cursor-pointer" />
                    <FaPinterest className="size-5 transition hover:text-m_birght_red text-white cursor-pointer" />
                    <FaInstagram className="size-5 transition hover:text-m_birght_red text-white cursor-pointer" />
                </div>
            </div>
            <div className="flex lg:gap-48 gap-16 flex-grow lg:pl-32 lg:py-0 py-12">
                <div className="flex flex-col gap-4 items-start">
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Home
                    </button>
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Pricing
                    </button>
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Products
                    </button>
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        About Us
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Careers
                    </button>
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Community
                    </button>
                    <button className="text-sm transition font-vietnam hover:text-m_birght_red text-white">
                        Privacy Policy
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-16 items-end">
                <div className="flex relative gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Updates in your inbox…"
                        className={`focus:outline-none border-[2px] text-xs w-52 rounded-full py-2 px-4 ${
                            isError
                                ? "border-m_birght_red"
                                : "border-transparent"
                        }`}
                    />
                    {isError && (
                        <span className="text-xs absolute top-11 left-3 text-m_birght_red italic">
                            Please insert a valid email
                        </span>
                    )}
                    <button className="py-2 px-4 bg-m_birght_red transition hover:brightness-200 rounded-full text-white font-vietnam text-sm">
                        Go
                    </button>
                </div>
                <span className="text-xs font-vietnam text-m_dark_grayish_blue lg:block hidden">
                    Copyright 2020. All Rights Reserved
                </span>
            </div>
        </footer>
    );
}
