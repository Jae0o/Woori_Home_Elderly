import { useEffect, useState } from "react";

export const useImagePreload = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();

    const handleLoad = () => {
      setIsLoaded(true);
      setError(false);
    };

    const handleError = () => {
      setError(true);
      setIsLoaded(false);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    img.src = imageSrc;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [imageSrc]);

  return { isLoaded, error };
};
