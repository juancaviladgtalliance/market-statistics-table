export const paginationList = (total: number) => {
  const pages = [];
  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }
  return pages;
};
