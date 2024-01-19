export const checkPositiveNegative = (
  prefix: string,
  value: number,
  sufix: string
) => {
  if (value === 0) {
    return { value: false, message: `N/A` };
  }
  if (value < 0) {
    return {
      value: false,
      message:
        "<span class='red'>" +
        prefix +
        " -" +
        Math.abs(value) +
        sufix +
        "</span>",
    };
  }
  return {
    value: true,
    message:
      "<span class='green'>" +
      prefix +
      " +" +
      Math.abs(value) +
      sufix +
      "</span>",
  };
};
