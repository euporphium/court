import { useLayoutEffect } from 'react';

export default function useColorScheme() {
  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  function setColorScheme(state: 'dark' | 'light' | null) {
    if (state === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }

    if (state === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }

    if (state === null) {
      localStorage.removeItem('theme');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  return { setColorScheme };
}
