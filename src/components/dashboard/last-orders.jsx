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
    return (
        <div className="w-full h-auto rounded-[14px] p-4 bg-white border-[1px] border-[#EDF2F7] flex flex-col gap-6">
            <div className="flex items-center justify-between text-[18px]">
                <span className="text-[#26282C] font-[600]">Last Orders</span>
                <Link href="#" className="text-[#34CAA5] font-[500]">
                    See All
                </Link>
            </div>
            <div className="flex flex-col">
                <div className="flex mb-6">
                    {
                        headers.map((h, index) =>
                            <span key={h.id * 35} className={`text-[16px] text-[#9CA4AB] font-[500] ${index == 0 ? "basis-[35%] " : h !== "Invoice" ? "flex-1" : ""}`}>{h}</span>
                        )
                    }
                </div>
                {
                    data.map((d, index) =>
                        <div key={d.index * 60} className="flex text-[16px] border-t-[1px] border-[#EDF2F6] h-[70px] items-center">
                            <div className="basis-[35%] flex items-center gap-2">
                                <div className="w-[32px] h-[32px] rounded-[50%] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/assets/images/${d.imagePath}')` }}></div>
                                <span className="text-[#3A3F51] font-[500]">{d.name}</span>
                            </div>
                            <span className="flex-1  text-start text-[#737373]">{d.date}</span>
                            <span className="flex-1 text-start text-[#0D062D] font-[500]">${d.amount.toLocaleString()}</span>
                            <span className={`flex-1 ${d.status.toLowerCase() == "paid" ? "text-[#34CAA5]" : "text-[#ED544E]"}`}>{d.status}</span>
                            <button className=" flex items-center gap-1">
                                <Image
                                    width={16}
                                    height={16}
                                    src={`/assets/icons/view.svg`}
                                    alt="view invoice"
                                />
                                <span className="text-[14px] text-[#0D062D]">View</span>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LastOrders;