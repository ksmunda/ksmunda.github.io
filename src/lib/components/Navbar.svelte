<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, ArrowUpRight } from '@lucide/svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { personalInfo } from '$lib/data/portfolio';

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  let activeSection = $state('hero');
  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;

      // Scroll spy logic
      const sections = ['hero', ...navLinks.map(link => link.href.substring(1))];
      let currentSection = 'hero';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the viewport top
          if (rect.top <= 160) {
            currentSection = sectionId;
          }
        }
      }
      activeSection = currentSection;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (e: MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      mobileMenuOpen = false;
      const navbarOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      history.pushState(null, '', href);
    }
  };
</script>

<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled ? 'glass py-3 border-b border-app-border' : 'bg-transparent py-5'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-12">
      <!-- Logo/Brand -->
      <a href="#hero" onclick={(e) => scrollToSection(e, '#hero')} class="flex items-center space-x-2 group">
        <span class="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter shadow-sm transition-transform duration-300 group-hover:scale-105">
          KS
        </span>
        <div class="flex flex-col">
          <span class="text-sm font-bold tracking-tight text-app-text-primary group-hover:text-accent-blue transition-colors duration-200">
            {personalInfo.name}
          </span>
          <span class="text-[9px] text-app-text-secondary tracking-widest uppercase font-mono leading-none">
            {personalInfo.company}
          </span>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-1 bg-app-surface/20 dark:bg-app-surface/20 border border-app-border rounded-full p-1.5 glass">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={(e) => scrollToSection(e, link.href)}
            class="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative {activeSection === link.href.substring(1) ? 'text-accent-blue bg-app-surface shadow-xs border border-app-border' : 'text-app-text-secondary hover:text-app-text-primary'}"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Action items (Theme + CTA) -->
      <div class="hidden md:flex items-center space-x-3">
        <ThemeToggle />
        <a
          href="#contact"
          onclick={(e) => scrollToSection(e, '#contact')}
          class="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-accent-blue hover:bg-accent-blue/95 active:scale-[0.98] rounded-full transition-all duration-200 cursor-pointer shadow-sm shadow-accent-blue/20"
        >
          Hire Me
          <ArrowUpRight class="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      <!-- Mobile Controls -->
      <div class="flex items-center space-x-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="p-2 text-app-text-secondary hover:text-app-text-primary hover:bg-app-surface/60 rounded-full border border-app-border focus:outline-none transition-all duration-200 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {#if mobileMenuOpen}
            <X class="w-4 h-4" />
          {:else}
            <Menu class="w-4 h-4" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div class="md:hidden transition-all duration-300 ease-in-out overflow-hidden {mobileMenuOpen ? 'max-h-screen opacity-100 border-b border-app-border glass' : 'max-h-0 opacity-0'}">
    <div class="px-4 pt-2 pb-6 space-y-2 flex flex-col">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={(e) => scrollToSection(e, link.href)}
          class="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 {activeSection === link.href.substring(1) ? 'text-accent-blue bg-app-surface border border-app-border' : 'text-app-text-secondary hover:text-app-text-primary hover:bg-app-surface/30'}"
        >
          {link.label}
        </a>
      {/each}
      <div class="pt-4 border-t border-app-border flex items-center justify-between px-4">
        <span class="text-xs text-app-text-secondary">Get in touch</span>
        <a
          href="#contact"
          onclick={(e) => scrollToSection(e, '#contact')}
          class="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-accent-blue hover:bg-accent-blue/95 rounded-full transition-all duration-200 shadow-sm shadow-accent-blue/20"
        >
          Contact Me
          <ArrowUpRight class="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  </div>
</nav>
