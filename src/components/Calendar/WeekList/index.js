import React from "react";

// Helpers
import { getWeekDate } from "../../../helpers/calendar";

// Components
import Week from "../Week";

const WeekList = ({ month, dateRange, code }) => {
  let weeks = [];
  let weekCounter = 0;
  let date = getWeekDate(month);
  let isDone = false;
  let monthIndex = date.month();

  while (!isDone) {
    weeks.push(
      <Week
        key={date}
        date={date.clone()}
        month={month}
        dateRange={dateRange}
        code={code}
      />,
    );
    date.add(1, "week");

    isDone = weekCounter++ > 2 && monthIndex !== date.month();
    monthIndex = date.month();
  }

  return weeks;
};

export default WeekList;
