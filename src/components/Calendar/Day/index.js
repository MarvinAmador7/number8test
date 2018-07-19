import React from "react";
import injectSheet from "react-jss";

import styles from "./styles";

const Day = ({
  classes,
  day: { isHolyDay, isWeekend, date, isCurrentMonth, isToday, number },
}) => (
    <span key={date.toString()} className={classes.container}>
      {number}
    </span>
  );

export default injectSheet(styles)(Day);
