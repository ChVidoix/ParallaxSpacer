import { Ref, useEffect, useState } from "react";

interface UseInViewProps {
  target: Ref<Element>;
  options: IntersectionObserverInit;
}

export const useInView = ({ target, options = {} }: UseInViewProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback = (entries: Array<IntersectionObserverEntry>) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer?.disconnect();

    // @ts-ignore
    if (target.current) {
      const _observer = new IntersectionObserver(callback, options);
      // @ts-ignore
      _observer.observe(target);
      setObserver(_observer);
    }

    return () => {
      observer?.disconnect();
    };
  }, [
    options.root,
    options.rootMargin,
    options.threshold,
    observer,
    target,
    options,
  ]);

  return isIntersecting;
};
