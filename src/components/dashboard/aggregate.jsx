import AggregateCard from "./aggregate-card";

const Aggregate = () => {

    const data = [
        {
            id: 1,
            label: "Total Order",
            value: 350,
            percentage: 23.5,
            isIncrease: true,
            iconPath: "order.svg"
        },
        {
            id: 2,
            label: "Total Refund",
            value: 270,
            percentage: 23.5,
            isIncrease: false,
            iconPath: "refund.svg",
        },
        {
            id: 1,
            label: "Average Sales",
            value: 1567,
            percentage: 23.5,
            isIncrease: false,
            iconPath: "sales.svg",
        },
        {
            id: 1,
            label: "Total Income",
            value: "$350.000",
            percentage: 23.5,
            isIncrease: true,
            iconPath: "income.svg"
        },

    ]
    return (
        <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4" >
            {
                data.map((d, index) =>
                    <AggregateCard key={d.id * 40} data={d}/>
                )
            }
        </div>
    );
}

export default Aggregate;