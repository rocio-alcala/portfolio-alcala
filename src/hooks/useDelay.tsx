import { useEffect, useState } from "react";

export function useDelay(delay: number) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), delay);
  });

  return isLoading;
}
