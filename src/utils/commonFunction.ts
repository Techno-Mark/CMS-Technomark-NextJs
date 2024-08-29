export const convertDate = (dateString: any) => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`${year}-${month}-${day}`);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day} ${monthNames[date.getMonth()]} ${year}`;
};
