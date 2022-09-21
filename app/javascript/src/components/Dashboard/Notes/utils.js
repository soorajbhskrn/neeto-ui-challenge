import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const lastUpdated = dateTime => dayjs(dateTime).fromNow();
const formatDate = dateTime => dayjs(dateTime).format("dddd, hh:mm A");

export { lastUpdated, formatDate };
