import { useEffect, useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { NavigationProps } from './useNavigation';
export const useElDimensions = (targetName: string, defaultValue = 56) => {
  const [height, setHeight] = useState(defaultValue);
  if (typeof document !== 'undefined') {
    var target: any = document.querySelector(targetName);
    useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            setHeight(Math.max(contentBoxSize.blockSize, 56));
          } else {
            setHeight(56);
          }
        }
      });
      target && resizeObserver.observe(target);
      return () => {
        target && resizeObserver.unobserve(target);
      };
    }, [document, target]);
  }
  return { height };
};
