const HOME_HASH_SCROLL_KEY = 'homeHashScroll';

export function scrollToHashSection(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

export function queueHomeHashScroll(id: string) {
  sessionStorage.setItem(HOME_HASH_SCROLL_KEY, id);
}

export function consumeHomeHashScroll(): string | null {
  const pending = sessionStorage.getItem(HOME_HASH_SCROLL_KEY);
  if (pending) {
    sessionStorage.removeItem(HOME_HASH_SCROLL_KEY);
  }
  return pending;
}

export function getHashIdFromHref(href: string): string | null {
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) {
    return null;
  }

  const id = href.slice(hashIndex + 1);
  return id || null;
}

export function scrollToHashWhenReady(id: string) {
  if (scrollToHashSection(id)) {
    window.history.replaceState(null, '', `#${id}`);
    return;
  }

  window.requestAnimationFrame(() => {
    if (scrollToHashSection(id)) {
      window.history.replaceState(null, '', `#${id}`);
      return;
    }

    window.setTimeout(() => {
      if (scrollToHashSection(id)) {
        window.history.replaceState(null, '', `#${id}`);
      }
    }, 100);
  });
}
