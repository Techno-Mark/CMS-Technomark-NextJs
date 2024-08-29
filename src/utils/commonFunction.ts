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

export const convertDetails1Date = (dateString: string): string => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`${year}-${month}-${day}`);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayNumber = parseInt(day, 10);
  const daySuffix = getDaySuffix(dayNumber);

  return `${dayNumber}${daySuffix} ${monthNames[date.getMonth()]}, ${year}`;
};

export const convertDetails2Date = (dateString: string): string => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`${year}-${month}-${day}`);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDay = day.padStart(2, "0");

  return `${monthNames[date.getMonth()]} ${formattedDay}, ${year}`;
};
