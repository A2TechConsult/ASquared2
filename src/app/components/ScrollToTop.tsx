import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router does not reset scroll position on navigation by default,
// so clicking a link (e.g. in the Footer) can land the user mid-page if
// the previous page was scrolled down. This resets scroll to the top on
// every route change. Renders nothing.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
