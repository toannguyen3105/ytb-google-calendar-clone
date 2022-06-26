import dayjs from "dayjs";
import React from "react";
import { DATE } from "../constants";

const DATE_FORMAT = DATE.DATE_FORMAT_SIMPLE;

const Day = ({ day, rowIdx }) => {
  const getCurrentDayClass = () =>
    day.format(DATE_FORMAT) === dayjs().format(DATE_FORMAT) &&
    "bg-blue-600 text-white rounded-full w-7";

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
