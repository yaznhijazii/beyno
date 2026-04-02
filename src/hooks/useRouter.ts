import { useState, useEffect } from 'react';

export type Route = 'home' | 'projects' | 'products';

export const useRouter = () => {
  const getRoute = (): Route => {
    const hash = window.location.hash;
    if (hash === '#/projects') return 'projects';
    if (hash === '#/products') return 'products';
    return 'home';
  };

  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (to: Route) => {
    if (to === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#/${to}`;
      window.scrollTo({ top: 0 });
    }
  };

  return { route, navigate };
};
