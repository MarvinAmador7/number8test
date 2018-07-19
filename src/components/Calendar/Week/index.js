import React from "react";
import moment from "moment";
import injectSheet from "react-jss";

import styles from "./styles";

// Components
import Day from "../Day";

const Week = ({ classes, month, date, dateRange }) => {
  let days = [];
  const datesRange = new Array(7);

  const inDateRange = date =>
    moment(date).isBetween(moment(dateRange.start), moment(dateRange.end));

  const isWeekend = date => {
    console.log(date);
    return date === 0 || date === 6;
  };

  datesRange.fill(0).map((n, i) => {
    let day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isToday: date.isSame(new Date(), "day"),
      date: date,
      inDateRange: inDateRange(date),
      isWeekend: isWeekend(moment(date).weekday()),
    };

    days.push(<Day day={day} />);

    date = date.clone();
    date.add(1, "day");
  });

  return (
    <div className={classes.container} key={days[0]}>
      {days}
    </div>
  );
};

export default injectSheet(styles)(Week);
