import dayjs from "dayjs";

export function formatTimestampToDateSting(date: number) {
	return dayjs(date).format("DD MMMM YYYY");
}
