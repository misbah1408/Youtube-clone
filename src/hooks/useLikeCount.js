import { useState, useEffect } from 'react';

// Define the function to format the like count
function formatLikeCount(likeCount) {
    // If likeCount is not defined or null, return an empty string
    if (!likeCount) return "";

    // Convert likeCount to number
    likeCount = parseInt(likeCount);

    // Define thresholds for conversion
    const thresholds = [
        { limit: 1000000, symbol: "m" }, // million
        { limit: 1000, symbol: "k" }, // thousand
    ];

    // Find the appropriate threshold to use
    const threshold = thresholds.find((t) => likeCount >= t.limit);

    // If no threshold is found, return the original likeCount
    if (!threshold) return likeCount.toString();

    // Otherwise, calculate the shortened likeCount
    let shortLikeCount = (likeCount / threshold.limit).toFixed(1);

    // If the decimal part is ".0" or ".5", remove it
    if (shortLikeCount.endsWith('.0') || shortLikeCount.endsWith('.5')) {
        shortLikeCount = Math.floor(likeCount / threshold.limit).toString();
    }

    // Append the symbol (e.g., "k" or "m")
    shortLikeCount += threshold.symbol;

    return shortLikeCount;
}

// Define the custom hook
function useLikeCount(likeCount) {
    const [formattedLikeCount, setFormattedLikeCount] = useState("");

    useEffect(() => {
        // Format the like count when it changes
        const formattedCount = formatLikeCount(likeCount);
        setFormattedLikeCount(formattedCount);
    }, [likeCount]); // Re-run effect when likeCount changes

    return formattedLikeCount;
}

export default useLikeCount;
