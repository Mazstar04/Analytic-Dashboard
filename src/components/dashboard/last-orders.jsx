"use client";
import { useDarkModeContext } from "@/containers/dark-mode-provider";
import Image from "next/image";
import Link from "next/link";

const LastOrders = () => {

    const headers = ["Name", "Date", "Amount", "Status", "Invoice"];
    const data = [
        {
            id: 1,
            name: "Marcus Bergson",
            date: "Nov 15, 2023",
            amount: 80000,
            status: "Paid",
            imagePath: "pics1.png"
        },
        {
            id: 2,
            name: "Jaydon Vaccaro",
            date: "Nov 15, 2023",
            amount: 1500000,
            status: "Refund",
            imagePath: "pics2.png"
        },
        {
            id: 3,
            name: "Corey Schleifer",
            date: "Nov 14, 2023",
            amount: 87000,
            status: "Paid",
            imagePath: "pics3.png"
        },
        {
            id: 4,
            name: "Cooper Press",
            date: "Nov 14, 2023",
            amount: 100000,
            status: "Refund",
            imagePath: "pics4.png"
        },
        {
            id: 5,
            name: "Phillip Lubin",
            date: "Nov 13, 2023",
            amount: 80000,
            status: "Paid",
            imagePath: "pics5.png"
        },

    ]
    const { darkMode } = useDarkModeContext();
    return (
        <div className="w-full h-auto rounded-[14px] p-4 dark:bg-gray-800 bg-white border-[1px] dark:border-gray-700 border-[#EDF2F7] flex flex-col gap-6 ">
            <div className="flex items-center justify-between text-[18px]">
                <span className="dark:text-gray-300 text-[#26282C] font-[600]">Last Orders</span>
                <Link href="#" className="text-[#34CAA5] font-[500]">
                    See All
                </Link>
            </div>
            <div className="max-w-[75vw] md:max-w-full overflow-x-auto ">
                <div className=" flex flex-col overflow-x-auto table-fancy-scrollbar w-[700px] md:w-full ">
                <div className="flex mb-6">
                    {
                        headers.map((h, index) =>
                            <span key={h.id * 35} className={`text-[16px] dark:text-gray-300 text-[#9CA4AB] font-[500] ${index == 0 ? "basis-[35%] " : h !== "Invoice" ? "flex-1" : ""}`}>{h}</span>
                        )
                    }
                </div>
                {
                    data.map((d, index) =>
                        <div key={d.index * 60} className="flex text-[16px] border-t-[1px] dark:border-gray-900 border-[#EDF2F6] h-[70px] items-center">
                            <div className="basis-[35%] flex items-center gap-2">
                                <div className="w-[32px] h-[32px] rounded-[50%] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/images/${d.imagePath}')` }}></div>
                                <span className="dark:text-gray-200 text-[#3A3F51] font-[500]">{d.name}</span>
                            </div>
                            <span className="flex-1 text-start dark:text-gray-300 text-[#737373]">{d.date}</span>
                            <span className="flex-1 text-start dark:text-white text-[#0D062D] font-[500]">${d.amount.toLocaleString()}</span>
                            <span className={`flex-1 ${d.status.toLowerCase() == "paid" ? "text-[#34CAA5]" : "text-[#ED544E]"}`}>{d.status}</span>
                            <button className=" flex items-center gap-1">
                                <Image
                                    width={16}
                                    height={16}
                                    src={`/assets/icons${darkMode ? "/dark" : ""}/view.svg`}
                                    alt="view invoice"
                                />
                                <span className="text-[14px] dark:text-gray-300 text-[#0D062D]">View</span>
                            </button>
                        </div>
                    )
                }
            </div>
            </div>
            {/*  */}
        </div>
    );
}

export default LastOrders;