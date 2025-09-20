import { useEffect, useState } from 'react';

export default function useInView(ref, threshold = 0.5) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        } else {
          setIsInView(false);
        }
      },
      { rootMargin: '0px', threshold: threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}
