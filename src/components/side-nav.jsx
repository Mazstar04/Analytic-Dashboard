'use client';
import { useDarkModeContext } from "@/containers/dark-mode-provider";
import Image from "next/image";
import { useEffect, useState } from "react";

const SideNav = () => {
    const navOptions = [
        {
            id: 1,
            name: 'dashboard',
            iconUrl: '/dashboard.svg',
            route: "/dashboard"
        },
        {
            id: 2,
            name: 'transactions',
            iconUrl: '/transactions.svg',
            route: "#"
        },
        {
            id: 3,
            name: 'users',
            iconUrl: '/users.svg',
            route: "#"
        },
        {
            id: 4,
            name: 'box',
            iconUrl: '/box.svg',
            route: "#"
        },
        {
            id: 5,
            name: 'ratio',
            iconUrl: '/ratio.svg',
            route: "#"
        },
        {
            id: 6,
            name: 'caution',
            iconUrl: '/caution.svg',
            route: "#"
        },

    ]

    const [activeNav, setActiveNav] = useState(1);
    const actions = [
        {
            id: 1,
            name: 'back',
            iconUrl: '/back.svg'
        },
        {
            id: 2,
            name: 'settings',
            iconUrl: '/settings.svg'
        },
        {
            id: 3,
            name: 'logout',
            iconUrl: '/logout.svg'
        },
    ]

    const {darkMode, toggleDarkMode} = useDarkModeContext();


    return (
        <div className="w-full h-full flex flex-col items-center py-4 dark:bg-gray-900 bg-[#F7F8FA] border-r-[1px] dark:border-gray-700 border-[#EBECF2]">
            <Image
                width={40}
                height={40}
                src="/assets/images/logo.svg"
                alt="logo"
            />
            <div className="flex-1 flex flex-col gap-8 mt-8 items-center  w-full">
                {
                    navOptions.map((n, index) =>
                        <button onClick={() => setActiveNav(n.id)} key={n.id} className={`w-full flex justify-center relative`}>
                            <Image
                                width={24}
                                height={24}
                                src={`/assets/icons${index==0 && darkMode? "/dark" : ""}/${n.iconUrl}`}
                                alt={n.title}
                            />
                            {
                                activeNav == n.id &&
                                <div className="w-[4px] h-full dark:bg-gray-300 bg-[#0D062D] rounded-tl-[5px] rounded-bl-[5px] absolute right-0">

                                </div>

                            }
                        </button>
                    )
                }
                <div className="w-[50px] rounded-[100px] dark:bg-gray-800 bg-white p-2 flex flex-col gap-4">
                    <button className={`w-[35px] h-[35px] rounded-[50%] flex items-center justify-center ${!darkMode? "bg-[#34CAA5]" : ""}`} onClick={toggleDarkMode}>
                        <Image
                            width={25}
                            height={25}
                            src={`/assets/icons/sun${!darkMode? "" : "-gray"}.svg`}
                            alt="sun"
                        />
                    </button>
                    <button className={`w-[35px] h-[35px] rounded-[50%] flex items-center justify-center ${darkMode? "bg-[#34CAA5]" : ""}`} onClick={toggleDarkMode}>
                        <Image
                            width={30}
                            height={30}
                            src={`/assets/icons/moon${darkMode? "" : "-gray"}.svg`}
                            alt="moon"
                        />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-6  items-center  ">
                {
                    actions.map((n, index) =>
                        <button key={n.id * 20} className={` flex justify-center`}>
                            <Image
                                width={24}
                                height={24}
                                src={`/assets/icons/${n.iconUrl}`}
                                alt={n.title}
                            />
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default SideNav;