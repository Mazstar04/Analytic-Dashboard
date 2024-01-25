import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const AggregateCard = ({ data }) => {
    return (
        <div className="border-[1px] border-[#EDF2F7] bg-white rounded-[14px] p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="h-[40px] w-[40px] rounded-[50%] border-[1px] border-[#E6E6E6] flex items-center justify-center">
                    <Image
                        width={24}
                        height={24}
                        src={`/assets/icons/${data.iconRoute}`}
                        alt="graph"
                    />
                </div>
                <Image
                    width={100}
                    height={32}
                    src={`/assets/icons/${data.isIncrease ? "increase" : "decrease"}.svg`}
                    alt={data.label}
                />

            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[18px] text-[#898989] font-[500]">{data.label}</span>
                <span className="text-[24px] text-[#3A3F51] font-[600]">{data.value}</span>
            </div>
            <div className="flex gap-2 items-center">
                <div className={`py-1 px-2 flex gap-1 rounded-[12px] items-center ${data.isIncrease ? "bg-[#34CAA51F] text-[#34CAA5]" : "bg-[#ED544E1F] text-[#ED544E]"}`}>
                    <Image
                        width={9}
                        height={5}
                        src={`/assets/icons/${data.isIncrease ? "increase" : "decrease"}-arrow.svg`}
                        alt="arrow"
                    />
                    <span className="text-[12px] font-[500]">{data.percentage}%</span>
                </div>
                <span className={`text-[13px] text-[#606060] ${inter.className}`}>vs. previous month</span>
            </div>
        </div>
    );
}

export default AggregateCard;