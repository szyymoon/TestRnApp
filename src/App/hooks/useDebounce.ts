import { useRef, useCallback } from 'react';

export const useDebounce = (fn: (...args: any[]) => void, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = useCallback((...args: any[]) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
      console.log('odpalam');
    }, delay);
  }, [fn, delay]);

  return debouncedFn;
};
