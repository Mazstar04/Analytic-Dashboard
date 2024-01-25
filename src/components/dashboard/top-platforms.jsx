import Link from "next/link";

const TopPlatForm = () => {
    const platforms = [
        {
            id: 1,
            name: "Book Bazaar",
            amountRaised: 2500000,
            percentage: 60,
            increase: "15%",
            color: '#6160DC',
        },
        {
            id: 2,
            name: "Artisan Aisle",
            amountRaised: 1800000,
            percentage: 50,
            increase: "10%",
            color: '#54C5EB',
        },
        {
            id: 3,
            name: "Toy Troop",
            amountRaised: 1200000,
            percentage: 40,
            increase: "18%",
            color: '#FFB74A',
        },
        {
            id: 3,
            name: "XStore",
            amountRaised: 1200000,
            percentage: 40,
            increase: "8%",
            color: '#FF4A55',
        },

    ]
    return (
        <div className="w-full h-auto rounded-[8px] py-4  px-6 bg-white">
            <div className="flex items-center justify-between text-[18px]">
                <span className="text-[#26282C] font-[600]">Top Platform</span>
                <Link href="#" className="text-[#34CAA5] font-[500]">
                    See All
                </Link>
            </div>
            <div className="mt-8 flex flex-col gap-6">
                {
                    platforms.map((p, index) =>
                        <div key={p.id * 30} className="flex flex-col gap-3">
                            <span className="text-[18px] text-[#22242C] font-[600]">{p.name}</span>
                            <div className="w-full h-[12px] rounded-[40px] bg-[#F5F5F5]">
                                <div
                                    style={{
                                        width: `${p.percentage}%`,
                                        backgroundImage: `linear-gradient(270deg, ${p.color} 0%, ${p.color} 30%)`,
                                    }}
                                    className="flex flex-col text-center h-full whitespace-nowrap text-white justify-center rounded-[40px]"
                                ></div>
                            </div>
                            <div className="flex items-center justify-between text-[18px] text-[#525252]">
                                <span>${p.amountRaised.toLocaleString()}</span>
                                <span>+{p.increase}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default TopPlatForm;

{/* <div className="w-full h-[14px] rounded-[12px] bg-[#EBEBEB]">
    <div
        style={{
            width: `${parseInt((activeBadge.accumulatedPoints / activeBadge.totalPoints) * 100)}%`,
            backgroundImage: `linear-gradient(270deg, ${activeBadge.color} 0%, ${activeBadge.color} 30%)`,
        }}
        className="shadow-none flex flex-col text-center h-full whitespace-nowrap text-white justify-center rounded-[12px]"
    ></div>
</div> */}