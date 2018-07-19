export default ({ colors, fonts, flex }) => ({
  container: {
    ...fonts.regular,
    flex: 1,
    fontSize: "1rem",
    cursor: "pointer",
    color: ({ day: { inDateRange } }) =>
      !inDateRange ? colors.disabled : "black",
    background: ({ day: { isCurrentMonth, inDateRange, isWeekend } }) => {
      if (!inDateRange) {
        return colors.disabled;
      }
      return isWeekend ? colors.weekend : colors.week;
    },
  },
});
