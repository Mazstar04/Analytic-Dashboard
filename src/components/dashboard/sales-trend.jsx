'use client';
import { useDarkModeContext } from '@/containers/dark-mode-provider';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import DateRangePicker from '../date-range-picker';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        const { value } = payload[0];
        return (
            <div className="custom-tooltip px-3 py-1 rounded-[4px] bg-[#090C2C] ">
                <p className='text-[#FFFFFF] text-[12px]'>${value}.00</p>
            </div>
        );
    }

    return null;
};

const SalesTrend = () => {

    const data = [
        {
            month: "Jan",
            value: 7,
        },
        {
            month: "Feb",
            value: 20,
        },
        {
            month: "Mar",
            value: 3,
        },
        {
            month: "Apr",
            value: 25,
        },
        {
            month: "Mei",
            value: 9,
        },
        {
            month: "Jun",
            value: 45,
        },
        {
            month: "Jul",
            value: 9,
        },
        {
            month: "Aug",
            value: 23,
        },
        {
            month: "Sep",
            value: 32,
        },
        {
            month: "Okt",
            value: 4,
        },
        {
            month: "Nov",
            value: 30,
        },
        {
            month: "Des",
            value: 26,
        },


    ]
    const [focusBar, setFocusBar] = useState(null);
    const formatYAxisTick = (value) => {
        return (value + 1).toFixed(2);
    };
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: '',
        endDate: '',
        key: 'selection',
    });

    const { darkMode } = useDarkModeContext();

    return (
        <div className="w-full h-full rounded-[14px] p-4 dark:bg-gray-800 bg-white border-[1px] dark:border-gray-700 border-[#EDF2F7] flex flex-col gap-4">
            <div className="flex items-center justify-between text-[18px]">
                <span className="dark:text-gray-300 text-[#26282C] font-[600]">Sales Trend</span>
                <div className="flex items-center gap-2">
                    <span className="text-[14px] dark:text-gray-300 text-[#3A3F51] font-[500]">Sort by:</span>
                    <div className="border-[1px] dark:border-gray-700 border-[#E1DFDF] dark:bg-gray-800 bg-white rounded-[20px] p-2 text-[12px] dark:text-gray-300 text-[#3A3F51] relative"><DateRangePicker selectedDateRange={selectedDateRange} setSelectedDateRange={setSelectedDateRange} />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%"   >
                    <BarChart
                        data={data}
                        onMouseMove={state => {
                            if (state.isTooltipActive) {
                                setFocusBar(state.activeTooltipIndex);
                            } else {
                                setFocusBar(null);
                            }
                        }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="6 6" stroke={`${darkMode ? "#525252" : " #EAEAEA"}`} />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 14, fill: `${darkMode ? "#fff" : "#525252"}`, fontWeight: 600 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tickFormatter={formatYAxisTick}
                            tick={{ fontSize: 12, fill: `${darkMode ? "#fff" : "#525252"}` }}
                            tickCount={7}
                            minTickGap={5}
                            axisLine={false}
                            tickLine={false}
                            width={40}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={focusBar === index ? 'url(#gradient)' : `${darkMode ? "#34caa455" : "#34CAA51A"}`}
                                    onMouseEnter={() => setFocusBar(index)}
                                    onMouseLeave={() => setFocusBar(null)}
                                    radius={[50, 50, 0, 0]}
                                />
                            ))}
                        </Bar>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#34CAA5" />
                                <stop offset="100%" stopColor="rgba(52, 202, 165, 0)" />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SalesTrend;