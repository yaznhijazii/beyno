import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from '../hooks/useRouter';
import type { Route } from '../hooks/useRouter';

interface RouterContextType {
  route: Route;
  navigate: (to: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const { route, navigate } = useRouter();
  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRoute = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRoute must be used within RouterProvider');
  return ctx;
};
