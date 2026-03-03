import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { useEffect } from 'react';
import FullScreenLoader from "./components/FullScreenLoader";
export default function App() {
  const routing = useRoutes(routes);
  useEffect(() => {
    const body = document.body;

    
    if (window.Telegram?.WebApp) {
      body.classList.add('telegram'); 

      
      
      if (window.Telegram.WebApp.colorScheme === 'dark') {
        body.classList.add('dark');
      }
      return;
    }

    
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isSystemDark) {
      body.classList.add('darks');
    } else {
      body.classList.remove('dark');
    }

    
    window.dispatchEvent(new Event('themeChanged'));

  }, []);
  return (
    <Suspense fallback={<FullScreenLoader />}>
      {routing}
    </Suspense>
  );
}
