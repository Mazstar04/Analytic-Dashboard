import TopPlatForm from "@/components/dashboard/top-platforms";
import Aggregate from "@/components/dashboard/aggregate";
import SalesTrend from "@/components/dashboard/sales-trend";
import LastOrders from "@/components/dashboard/last-orders";

const PageContent = () => {
    return (
        <div className="flex flex-col  gap-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:h-[380px]">
                <div className=" h-[300px] lg:h-auto lg:flex-1"><SalesTrend/></div>
                <div className="md:basis-[40%] "><Aggregate /></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 ">
                <div className="hidden md:block lg:flex-1 h-auto"><LastOrders/></div>
                <div className="md:basis-[40%] "><TopPlatForm /></div>
            </div>
        </div>
    );
}

export default PageContent;