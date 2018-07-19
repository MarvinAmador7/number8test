import React, { Component } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
import injectSheet from "react-jss";

import MonthLabel from "./MonthLabel";
import DayNames from "./DayNames";
import WeekList from "./WeekList";

import styles from "./styles";

const moment = extendMoment(Moment);

class Calendar extends Component {
  render() {
    const { classes, month, dateRange } = this.props;
    return (
      <div className={classes.calendar}>
        <div className={classes.innerContainer}>
          <DayNames />
          <div className={classes.monthLabelContainer}>
            <MonthLabel month={month} />
          </div>
        </div>
        <WeekList month={month} dateRange={dateRange} />
      </div>
    );
  }
}

export default injectSheet(styles)(Calendar);
