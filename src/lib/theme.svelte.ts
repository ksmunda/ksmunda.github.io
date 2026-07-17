import { browser } from '$app/environment';

class ThemeState {
  current = $state<'dark' | 'light'>('dark');

  constructor() {
    if (browser) {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        this.current = stored;
      } else {
        // Default to dark mode as requested by design guidelines
        this.current = 'dark';
      }
      this.apply();
    }
  }

  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    if (browser) {
      localStorage.setItem('theme', this.current);
      this.apply();
    }
  }

  apply() {
    if (browser) {
      const root = document.documentElement;
      if (this.current === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }
  }
}

export const themeState = new ThemeState();
