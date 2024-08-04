export const addDays = (date, days) => {
  const newdate = new Date(date);
  newdate.setDate(newdate.getDate() + days);
  return newdate;
};
