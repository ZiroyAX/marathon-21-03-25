import { useState, useEffect } from "react";

export default function useUpdateScreenSize() {
  const [currentSize, setCurrentSize] = useState({width: window.innerWidth, height: window.innerHeight});

  function updateSize() {
    setCurrentSize({width: window.innerWidth, height: window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [])

  return [currentSize]
}