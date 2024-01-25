'use client';

import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

const Layout = ({ children }) => {
    return (
        <div className="flex w-full h-full">
            <div className="basis-[6%]  h-full">
                <SideNav />
            </div>
            <div className="flex-1 flex flex-col bg-[#FAFAFA]">
                <div className="h-[88px]">
                    <TopNav />
                </div>
                <div className="flex-1 p-[10px] md:p-[20px] overflow-y-auto fancy-scrollbar" >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;

