<script lang="ts">
  import { personalInfo } from '$lib/data/portfolio';
  import { MessageSquare, ArrowUp } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';
  import LinkedinIcon from './LinkedinIcon.svelte';

  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>

<footer class="border-t border-app-border bg-app-surface/20 py-12 transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Logo & Info -->
      <div class="flex items-center space-x-2.5">
        <span class="w-7 h-7 rounded bg-accent-blue flex items-center justify-center text-white font-mono font-bold text-xs tracking-tighter shadow-sm">
          KS
        </span>
        <div class="flex flex-col text-left">
          <span class="text-xs font-bold tracking-tight text-app-text-primary">
            {personalInfo.name}
          </span>
          <span class="text-[9px] text-app-text-secondary tracking-widest uppercase font-mono leading-none">
            © {currentYear} NUVRO Site
          </span>
        </div>
      </div>

      <!-- Center description -->
      <p class="text-[11px] text-app-text-secondary font-inter max-w-xs text-center md:text-left leading-relaxed">
        Engineered with SvelteKit 2, Svelte 5 runes, Tailwind CSS v4, and hosted on GitHub Pages.
      </p>

      <!-- Right: Social Links & Back to Top -->
      <div class="flex items-center space-x-5">
        <div class="flex items-center space-x-3.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <GithubIcon class="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon class="w-4 h-4" />
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
            aria-label="WhatsApp Contact"
          >
            <MessageSquare class="w-4 h-4" />
          </a>
        </div>

        <button
          type="button"
          onclick={scrollToTop}
          class="p-2 rounded-full border border-app-border bg-app-surface/40 hover:bg-app-surface hover:text-accent-blue transition-all duration-200 cursor-pointer focus:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  </div>
</footer>
