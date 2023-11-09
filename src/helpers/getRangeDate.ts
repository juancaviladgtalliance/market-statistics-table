import moment from "moment";

export function getRangeDate(startRange: number, endRange: number) {
  const start = moment().subtract(endRange, "months").format("YYYY-MM-DD");
  const end = moment().subtract(startRange, "months").format("YYYY-MM-DD");
  return { start, end };
}
