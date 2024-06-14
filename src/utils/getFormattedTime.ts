import { formatDistanceToNow, format, isBefore, subMonths, isThisYear } from 'date-fns';

/*In this function we pass as a parameter a new Date of the updated_At that we receive from the API(type Date).
Then we create a new Date (the actual one from the present) and we then check two scenarios.
  1. If it was updated within the last month, we return it as 'days ago'.
  2. If it was updated within this year, we don´t print the year.
  3. If the two are not correct, then it was updated from a previous year, therefore we print the year.
 */

export const formatDate = (originalUpdatedAtTime: Date) => {
  const date = originalUpdatedAtTime;
  const actualDate = new Date();
  
  if (isBefore(subMonths(actualDate, 1), date)) {
    const timeAgo = formatDistanceToNow(date);
    return 'Updated ' + timeAgo + ' ago';
  }

  if (isThisYear(date)) {
    const formattedDate = format(date, 'MMM d');
    return 'Updated on ' + formattedDate;
  }

  const formattedDateYear = format(date, 'MMM d, yyyy');
  return 'Updated on ' + formattedDateYear;
};