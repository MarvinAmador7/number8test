import React, { Component, Fragment } from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

import Calendar from "../../components/Calendar";

const moment = extendMoment(Moment);

class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
      startDate: "",
      endDate: "",
    };
  }

  onChange = ({ target: { value, name, type } }) => {
    this.setState({
      [name]:
        type === "number"
          ? moment(this.state.startDate)
              .clone()
              .add(value - 1, "days")
              .format("YYYY-MM-DD")
          : value,
    });
  };

  render() {
    const { startDate, endDate } = this.state;
    const customRange = moment.range(moment(startDate), moment(endDate));
    const selectedMonths = Array.from(customRange.by("month"));
    return (
      <Fragment>
        <input
          placeholder="start Date"
          type="date"
          name="startDate"
          onChange={this.onChange}
        />
        <input
          placeholder="number of days"
          type="number"
          name="endDate"
          onChange={this.onChange}
        />
        {selectedMonths.map(month => (
          <Calendar month={month} dateRange={customRange} />
        ))}
      </Fragment>
    );
  }
}

export default Calendars;
