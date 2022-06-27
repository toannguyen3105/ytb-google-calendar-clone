import dayjs from "dayjs";
import React, { useState } from "react";
import { getMonth } from "../util";

const SmallCalendar = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return <div>SmallCalendar</div>;
};

export default SmallCalendar;
