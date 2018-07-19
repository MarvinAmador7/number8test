export function getWeekDays() {
  return ["S", "M", "T", "W", "T", "F", "S"];
}

export function getWeekDate(date) {
  return date
    .clone()
    .startOf("month")
    .add("w" - 1)
    .day("Sunday");
}
