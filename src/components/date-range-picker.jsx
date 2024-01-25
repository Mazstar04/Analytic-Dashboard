"use client";
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';
import moment from 'moment';
import Image from 'next/image';
import { useDarkModeContext } from '@/containers/dark-mode-provider';

function DateRangePicker({ selectedDateRange, setSelectedDateRange }) {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [hasSelectedDate, setHasSelectedDate] = useState(false);
    const { darkMode } = useDarkModeContext();

    const handleDateRangeChange = (ranges) => {
        setSelectedDateRange(ranges.selection);
        setDatePickerVisible(false);
        if (!hasSelectedDate) {
            setHasSelectedDate(true);
        }
    };

    const toggleDatePicker = () => {
        setDatePickerVisible(!isDatePickerVisible);
    };


    return (
        <div className=''>
            <div className='flex items-center gap-2'>
                <button onClick={toggleDatePicker} className='text-[12px] font-[500] dark:text-gray-300 text-[#787486] '>{!hasSelectedDate ? "Weekly" : `${moment(selectedDateRange.startDate).format('MMM D, YYYY')} - ${moment(selectedDateRange.endDate).format('MMM D, YYYY')}`}</button>
                <Image
                    width={12}
                    height={7}
                    src={`/assets/icons${darkMode ? "/dark" : ""}/down-arrow.svg`}
                    alt="arrow"
                />
            </div>
            {isDatePickerVisible && (
                <div className='absolute z-20 right-0'>
                    <DateRange
                        ranges={[selectedDateRange]}
                        onChange={handleDateRangeChange}
                        editableDateInputs={true}
                    
                    />
                </div>
            )}


        </div>
    );
}

export default DateRangePicker;

