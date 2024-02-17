import { useEffect, useState } from 'react';

function useTimeAgo(publishedAt) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const formatTimeAgo = (publishedAt) => {
      const currentDate = new Date();
      const publishedDate = new Date(publishedAt);
      const millisecondsDiff = currentDate - publishedDate;
      const secondsDiff = millisecondsDiff / 1000;
      const minutesDiff = secondsDiff / 60;
      const hoursDiff = minutesDiff / 60;
      const daysDiff = hoursDiff / 24;
      const monthsDiff = daysDiff / 30;
      const yearsDiff = daysDiff / 365;

      if (yearsDiff >= 1) {
        return (
          Math.floor(yearsDiff) +
          " year" +
          (Math.floor(yearsDiff) > 1 ? "s" : "") +
          " ago"
        );
      } else if (monthsDiff >= 1) {
        return (
          Math.floor(monthsDiff) +
          " month" +
          (Math.floor(monthsDiff) > 1 ? "s" : "") +
          " ago"
        );
      } else if (daysDiff >= 1) {
        return (
          Math.floor(daysDiff) +
          " day" +
          (Math.floor(daysDiff) > 1 ? "s" : "") +
          " ago"
        );
      } else if (hoursDiff >= 1) {
        return (
          Math.floor(hoursDiff) +
          " hour" +
          (Math.floor(hoursDiff) > 1 ? "s" : "") +
          " ago"
        );
      } else if (minutesDiff >= 1) {
        return (
          Math.floor(minutesDiff) +
          " minute" +
          (Math.floor(minutesDiff) > 1 ? "s" : "") +
          " ago"
        );
      } else {
        return (
          Math.floor(secondsDiff) +
          " second" +
          (Math.floor(secondsDiff) > 1 ? "s" : "") +
          " ago"
        );
      }
    };

    setTimeAgo(formatTimeAgo(publishedAt));
  }, [publishedAt]);

  return timeAgo;
}

export default useTimeAgo;
