import { useState, useEffect } from 'react';

function useViewCount(viewCount) {
  const [formattedCount, setFormattedCount] = useState('');

  useEffect(() => {
    // If viewCount is not defined or null, set formattedCount to an empty string
    if (!viewCount) {
      setFormattedCount('');
      return;
    }

    // Convert viewCount to number
    viewCount = parseInt(viewCount);

    // Define thresholds for conversion
    const thresholds = [
      { limit: 1000000, symbol: 'm' }, // million
      { limit: 1000, symbol: 'k' }, // thousand
    ];

    // Find the appropriate threshold to use
    const threshold = thresholds.find((t) => viewCount >= t.limit);

    // If no threshold is found, set formattedCount to original viewCount
    if (!threshold) {
      setFormattedCount(viewCount.toString());
      return;
    }

    // Otherwise, calculate the shortened viewCount
    const shortViewCount = (viewCount / threshold.limit).toFixed(1) + threshold.symbol;
    setFormattedCount(shortViewCount);
  }, [viewCount]);

  return formattedCount;
}

export default useViewCount;
