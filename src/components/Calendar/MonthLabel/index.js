import React from "react";
import injectSheet from "react-jss";

import styles from "./styles";

const MonthLabel = ({ classes, month }) => (
  <span className={classes.container}>{month.format("MMMM YYYY")}</span>
);

export default injectSheet(styles)(MonthLabel);
