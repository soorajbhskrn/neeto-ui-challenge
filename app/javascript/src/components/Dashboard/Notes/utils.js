import dayjs from "dayjs";

const formatDateRelativeToNow = dateTime => dayjs(dateTime).fromNow();
const formatDateWithDayAndTime = dateTime =>
  dayjs(dateTime).format("dddd, hh:mm A");

export { formatDateRelativeToNow, formatDateWithDayAndTime };
