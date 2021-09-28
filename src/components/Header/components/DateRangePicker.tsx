import React, {FC} from 'react';
// @ts-ignore
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onDateRangeHandle: (start: Date, end: Date) => void;
}

export const DateRangePickerComponent: FC<DateRangePickerProps> = ({ startDate, endDate, onDateRangeHandle }) => {
  const onDateRangeChange = ([start, end]: [Date, Date]) => {
    onDateRangeHandle(start, end);
  };

  return (
    <DateRangePicker
      onChange={onDateRangeChange}
      value={[Date.parse(startDate), Date.parse(endDate)]}
    />
  );
}