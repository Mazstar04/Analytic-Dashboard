"use client"
import { useDarkModeContext } from "@/containers/dark-mode-provider";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const TopNav = () => {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const actions = [
        {
            id: 1,
            title: "My Account",
            iconPath: "users.svg",
            action: () => { },
        },
        {
            id: 2,
            title: "Logout",
            iconPath: "logout-red.svg",
            action: () => { },
        },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    const { darkMode } = useDarkModeContext();
    return (
        <div className="w-full h-full border-b-[1px] dark:border-gray-700 border-[#EBECF2] flex items-center px-6 gap-3 md:gap-6">
            <h1 className="text-[20px] dark:text-gray-300 text-[#26282C] font-[600] flex-1">Dashboard</h1>
            <div className="hidden lg:flex  w-[300px] h-[48px] rounded-[24px] dark:bg-gray-800 md:bg-white border-[1px] dark:border-gray-700 border-[#DADDDD]  gap-2 items-center px-4">
                <Image
                    width={16}
                    height={16}
                    src="/assets/icons/search.svg"
                    alt="search"
                />
                <input type="text" placeholder="Search..." className="dark:bg-gray-800 placeholder:text-[16px] placeholder:text-[#A3A3A3] outline-none dark:text-white " />
            </div>
            <div className="flex gap-6 items-center">
                <div className="hidden md:flex gap-2 items-center">
                    <Image
                        width={20}
                        height={20}
                        src={`/assets/icons${darkMode ? "/dark" : ""}/calendar.svg`}
                        alt="calendar"
                    />
                    <span className={`font-[500] dark:text-white text-[14px] ${inter.className}`}>{formattedDate}</span>
                </div>
                <div className="border-[1px] dark:border-gray-700 border-[#DADDDD] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                    <Image
                        width={16}
                        height={16}
                        src={`/assets/icons${darkMode ? "/dark" : ""}/notification.svg`}
                        alt="notification"
                    />
                </div>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="border-[1px] dark:border-gray-700 border-[#DADDDD] rounded-[28px] flex gap-2 items-center px-2 py-1 relative">
                <div className="h-[38px] w-[38px] rounded-[50%] border-[1px] dark:border-gray-700 border-[#DADDDD] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/images/prof.png')` }}></div>
                <div className={`hidden md:flex flex-col gap-0 ${inter.className}`}>
                    <span className="text-[16px] dark:text-gray-300 text-[#26282C]">Justin Bergson</span>
                    <span className="text-[14px] dark:text-gray-400 text-[#787486]">Justin@gmail.com</span>
                </div>
                <Image
                    width={14}
                    height={8}
                    src={`/assets/icons${darkMode ? "/dark" : ""}/down-arrow.svg`}
                    alt="arrow"
                />

                {
                    isOpen &&
                    <div className="absolute shadow-md z-30 rounded-[15px] dark:bg-gray-900 bg-white top-16 right-0 flex flex-col p-4 gap-4 w-auto">
                        {
                            actions.map(a =>
                                <button key={a.id * 29} className="flex items-center gap-2 ">
                                    <Image
                                        width={20}
                                        height={20}
                                        src={`/assets/icons/${a.iconPath}`}
                                        alt="arrow"
                                    />
                                    <span className="dark:text-gray-300 whitespace-nowrap">{a.title}</span>
                                </button>
                            )
                        }
                    </div>
                }
            </button>
        </div>
    );
}

export default TopNav;