// Format date: YYYY-MM-DD
export function formatDateYmd(date: Date) {
  // get the year, month and day from the date object
  let year = date.getFullYear();
  let month: number | string = date.getMonth() + 1; // months are zero-based
  let day: number | string = date.getDate();

  // pad with leading zeros if needed
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  // return the formatted date string
  return year + '-' + month + '-' + day;
}

// Get a Date from string. Format: YYYY-MM-DD
export function parseDateYmd(dateString: string) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
