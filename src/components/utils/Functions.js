export function formatViewCount(viewCount) {
    // If viewCount is not defined or null, return empty string
    if (!viewCount) return "";

    // Convert viewCount to number
    viewCount = parseInt(viewCount);

    // Define thresholds for conversion
    const thresholds = [
      { limit: 1000000, symbol: "M" }, // million
      { limit: 1000, symbol: "k" }, // thousand
    ];

    // Find the appropriate threshold to use
    const threshold = thresholds.find((t) => viewCount >= t.limit);

    // If no threshold is found, return original viewCount
    if (!threshold) return viewCount.toString();

    // Otherwise, calculate the shortened viewCount
    let shortViewCount = (viewCount / threshold.limit).toFixed(1) + threshold.symbol;

    // If the shortViewCount ends with ".0", remove it
    if (shortViewCount.endsWith('.0')) {
      shortViewCount = shortViewCount.slice(0, -2) + threshold.symbol;
    }

    return shortViewCount;
}

export  function formatYouTubeDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    // Initialize an empty array to store the components
    const components = [];

    // Conditionally add hours to the components array if they are non-zero
    if (hours > 0) {
      components.push(hours.toString().padStart(2, "0"));
    }

    // Add minutes and seconds to the components array
    components.push(minutes.toString().padStart(2, "0"));
    components.push(seconds.toString().padStart(2, "0"));

    // Join the components array with colons to get the formatted duration string
    return components.join(":");
  }

export  function formatTimeAgo(publishedAt) {
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
  }
 