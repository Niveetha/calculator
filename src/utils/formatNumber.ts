export const formatNumber = (count: string): string => {
  if (count.includes(".")) {
    const token = count.split(".");
    return `${token[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${token[1]}`;
  }
  return count.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
