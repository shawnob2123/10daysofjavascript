function getDayName(dateString) {
  const day = new Date(dateString);
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[day.getDay()];
}
