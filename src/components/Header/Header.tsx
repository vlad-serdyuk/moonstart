import React, {FC} from 'react';
import { DateRangePickerComponent } from "./components/DateRangePicker";

interface HeaderProps {
  startDate: string;
  endDate: string;
  onDateRangeHandle: (start: Date, end: Date) => void;
}

export const Header: FC<HeaderProps> = ({ startDate, endDate, onDateRangeHandle }) => {
  return (
    <header className="App-header">
      <DateRangePickerComponent
        startDate={startDate}
        endDate={endDate}
        onDateRangeHandle={onDateRangeHandle}
      />
    </header>
  );
}
