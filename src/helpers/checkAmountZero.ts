export const checkAmountZero = (
  prefix: string = "",
  Value: number,
  sufix: string = ""
) => {
  if (Value === 0) {
    return { value: false, message: `N/A` };
  }
  return { value: true, message: `${prefix}${Value}${sufix}` };
};
