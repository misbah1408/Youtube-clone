import { useState, useEffect } from 'react';

function useDuration(duration) {
  const [formattedDuration, setFormattedDuration] = useState('');

    // Ensure duration exists before performing computations
    if (duration) {
      const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

      const hours = parseInt(match[1]) || 0;
      const minutes = parseInt(match[2]) || 0;
      const seconds = parseInt(match[3]) || 0;

      // Initialize an empty array to store the components
      const components = [];

      // Conditionally add hours to the components array if they are non-zero
      if (hours > 0) {
        components.push(hours.toString().padStart(2, '0'));
      }

      // Add minutes and seconds to the components array
      components.push(minutes.toString().padStart(2, '0'));
      components.push(seconds.toString().padStart(2, '0'));

      // Join the components array with colons to get the formatted duration string
      const formattedDurationString = components.join(':');

      // Set the formatted duration in the state
      setFormattedDuration(formattedDurationString);

  return formattedDuration(duration);
}
}

export default useDuration;
