import React from "react";
import injectSheet from "react-jss";

// Helpers
import { getWeekDays } from "../../../helpers/calendar";

import styles from "./styles";

const DayNames = ({ classes, month }) => (
  <div className={classes.container}>
    {getWeekDays().map(day => <span className={classes.day}>{day}</span>)}
  </div>
);

export default injectSheet(styles)(DayNames);
