'use client';

import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";
import { DarkModeProvider } from "@/containers/dark-mode-provider";

const Layout = ({ children }) => {
    return (
        <DarkModeProvider>
            <div className="flex w-full h-full">
                <div className="basis-[6%]  h-full">
                    <SideNav />
                </div>
                <div className="flex-1 flex flex-col dark:bg-gray-900 bg-[#FAFAFA]">
                    <div className="h-[88px]">
                        <TopNav />
                    </div>
                    <div className="flex-1 p-[10px] md:p-[20px] overflow-y-auto fancy-scrollbar" >
                        {children}
                    </div>
                </div>
            </div>
        </DarkModeProvider>
    );
}

export default Layout;

