import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const TopNav = () => {

    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      
      const formattedDate = new Date().toLocaleDateString('en-US', options);
    return (
        <div className="w-full h-full border-b-[1px] border-[#EBECF2] flex items-center px-6 gap-3 md:gap-6">
            <h1 className="text-[20px] text-[#26282C] font-[600] flex-1">Dashboard</h1>
            <div className="hidden lg:flex  w-[300px] h-[48px] rounded-[24px] bg-white border-[1px] border-[#DADDDD]  gap-2 items-center px-4">
                <Image
                    width={16}
                    height={16}
                    src="/assets/icons/search.svg"
                    alt="search"
                />
                <input type="text" placeholder="Search..." className=" placeholder:text-[16px] placeholder:text-[#A3A3A3]" />
            </div>
            <div className="flex gap-6 items-center">
                <div className="hidden md:flex gap-2 items-center">
                    <Image
                        width={20}
                        height={20}
                        src="/assets/icons/calendar.svg"
                        alt="search"
                    />
                    <span className={`font-[500] text-[14px] ${inter.className}`}>{formattedDate}</span>
                </div>
                <div className="border-[1px] border-[#DADDDD] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                    <Image
                        width={16}
                        height={16}
                        src="/assets/icons/notification.svg"
                        alt="search"
                    />
                </div>
            </div>
            <div className="border-[1px] border-[#DADDDD] rounded-[28px] flex gap-2 items-center px-2 py-1">
                <div className="h-[38px] w-[38px] rounded-[50%] border-[1px] border-[#DADDDD] bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url('/assets/images/prof.png')`}}></div>
                <div className={`hidden md:flex flex-col gap-0 ${inter.className}`}>
                    <span className="text-[16px] text-[#26282C]">Justin Bergson</span>
                    <span className="text-[14px] text-[#787486]">Justin@gmail.com</span>
                </div>
                <Image
                    width={14}
                    height={8}
                    src="/assets/icons/down-arrow.svg"
                    alt="search"
                />
            </div>
        </div>
    );
}

export default TopNav;