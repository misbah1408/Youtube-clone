import React, { useEffect } from 'react'

export default function Shorts({setProgress}) {
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
          setProgress(100);
        }, 2000);
      }, []);
  return (
    <div>
        
    </div>
  )
}
