import { useEffect } from 'react';

import {
  consumeHomeHashScroll,
  scrollToHashWhenReady,
} from '@/lib/hashScroll';

export function useHomeHashScroll() {
  useEffect(() => {
    const scrollFromLocation = () => {
      const pending = consumeHomeHashScroll();
      const hashId = pending ?? window.location.hash.replace(/^#/, '');
      if (!hashId) {
        return;
      }

      scrollToHashWhenReady(hashId);
    };

    scrollFromLocation();
    window.addEventListener('hashchange', scrollFromLocation);
    return () => window.removeEventListener('hashchange', scrollFromLocation);
  }, []);
}
