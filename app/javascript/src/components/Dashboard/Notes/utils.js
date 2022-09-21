import dayjs from "dayjs";

const createdDateTillNow = dateTime => dayjs(dateTime).fromNow();
const formatDateWithDayAndTime = dateTime =>
  dayjs(dateTime).format("dddd, hh:mm A");

export { createdDateTillNow, formatDateWithDayAndTime };
