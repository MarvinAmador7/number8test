export default ({ colors, fonts, flex }) => ({
  container: {
    ...fonts.regular,
    flex: 1,
    fontSize: "1rem",
    cursor: "pointer",
    color: ({ day: { inDateRange } }) =>
      !inDateRange ? colors.disabled : "black",
    background: ({ day: { isCurrentMonth, inDateRange, isWeekend, isHolyDay } }) => {
      if (!inDateRange) {
        return colors.disabled;
      } else if (isHolyDay) {
        return colors.holyday;
      }
      return isWeekend ? colors.weekend : colors.week;
    },
  },
});
