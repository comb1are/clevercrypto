import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { useEffect } from 'react';
export default function App() {
  const routing = useRoutes(routes);
  useEffect(() => {
    const body = document.body;

    // Проверяем, запущены ли мы внутри Telegram
    if (window.Telegram?.WebApp) {
      body.classList.add('telegram'); // Врубаем поддержку переменных ТГ

      // Телеграм сам знает свою тему, но на всякий случай 
      // можем продублировать логику dark
      if (window.Telegram.WebApp.colorScheme === 'dark') {
        body.classList.add('dark');
      }
      return;
    }

    // Если мы в браузере/расширении: проверяем системную тему ОС
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isSystemDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }

    // Подсказываем хукам, что тема обновилась
    window.dispatchEvent(new Event('themeChanged'));

  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {routing}
    </Suspense>
  );
}
