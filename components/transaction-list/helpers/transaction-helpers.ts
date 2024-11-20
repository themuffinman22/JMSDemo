// Date formatter for pretty datestring
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) { // handle
    throw new Error('Invalid date format');
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  return formattedDate;
}

// format currency to pretty string
export function numberToCurrency(value: number) {
  const formattedValue = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  }).format(value);
  return formattedValue;
}