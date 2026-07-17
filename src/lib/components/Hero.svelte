<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowRight, Download, Mail, Terminal, Shield, Play } from '@lucide/svelte';
  import { personalInfo } from '$lib/data/portfolio';

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
  });

  const scrollToSection = (e: MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-app-bg transition-colors duration-300">
  <!-- Subtle Background Grid & Gradients -->
  <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20"></div>
  
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-3xl -z-10 animate-pulse duration-10000"></div>
  <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse duration-8000"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Left: Introduction and CTAs -->
      <div class="lg:col-span-7 space-y-8 text-left transition-all duration-1000 transform {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
        <div class="space-y-4">
          <!-- Small Badge -->
          <span class="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20 tracking-wider uppercase font-mono">
            Founder of {personalInfo.company}
          </span>
          
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-geist text-app-text-primary leading-[1.1]">
            Hello, I'm <br />
            <span class="text-gradient-accent">{personalInfo.name}</span>
          </h1>
          
          <h2 class="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight font-geist text-app-text-secondary">
            {personalInfo.title}
          </h2>
        </div>

        <p class="max-w-xl text-base sm:text-lg text-app-text-secondary leading-relaxed font-inter">
          {personalInfo.tagline} {personalInfo.introduction}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            onclick={(e) => scrollToSection(e, '#projects')}
            class="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent-blue hover:bg-accent-blue/95 active:scale-[0.98] rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-accent-blue/20 group"
          >
            View Projects
            <ArrowRight class="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          
          <a
            href={personalInfo.resumeUrl}
            class="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-app-text-primary bg-app-surface/60 hover:bg-app-surface/90 border border-app-border active:scale-[0.98] rounded-full transition-all duration-200 cursor-pointer"
          >
            Download Resume
            <Download class="w-4 h-4 ml-2" />
          </a>

          <a
            href="#contact"
            onclick={(e) => scrollToSection(e, '#contact')}
            class="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-app-text-secondary hover:text-app-text-primary hover:bg-app-surface/40 active:scale-[0.98] rounded-full transition-all duration-200 cursor-pointer"
          >
            Hire Me
            <Mail class="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      <!-- Right: Interactive Portrait & Tech Mockup -->
      <div class="lg:col-span-5 relative transition-all duration-1000 delay-300 transform {mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}">
        <div class="relative mx-auto max-w-md lg:max-w-none aspect-square rounded-2xl border border-app-border bg-app-surface/30 p-4 glass shadow-2xl overflow-hidden flex flex-col justify-between">
          
          <!-- Mockup Header -->
          <div class="flex items-center justify-between border-b border-app-border pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span class="text-[10px] text-app-text-secondary font-mono ml-2">nuvro-prod-k8s:~</span>
            </div>
            <div class="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-semibold animate-pulse">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1"></span>
              ACTIVE SYSTEM
            </div>
          </div>

          <!-- Mockup Screen / Code Area -->
          <div class="flex-1 py-4 font-mono text-[11px] md:text-xs leading-relaxed space-y-4 overflow-y-auto max-h-[280px]">
            <div>
              <span class="text-accent-blue">$</span> <span class="text-app-text-primary">npm run dev --host nuvro.in</span>
              <p class="text-app-text-secondary mt-1">SvelteKit v2.0 - Svelte v5 (Runes) compiler online</p>
              <p class="text-emerald-500">➜  Local:   http://localhost:5173/</p>
            </div>

            <div class="border-l-2 border-accent-blue/30 pl-3 py-1 bg-accent-blue/5 rounded-r-md">
              <span class="text-pink-500">const</span> <span class="text-purple-400">developer</span> = <span class="text-yellow-400">new</span> <span class="text-blue-400">TechnicalLeader</span>({'{'}
              <div class="pl-4">
                name: <span class="text-emerald-400">"Kulveer Singh"</span>,
                role: <span class="text-emerald-400">"Technical PM / Senior Developer"</span>,
                founded: <span class="text-emerald-400">"NUVRO"</span>,
                experience: <span class="text-cyan-400">15</span>,
                stack: [<span class="text-emerald-400">"Laravel"</span>, <span class="text-emerald-400">"Node"</span>, <span class="text-emerald-400">"Svelte"</span>, <span class="text-emerald-400">"AWS"</span>]
              </div>
              {'}'});
            </div>

            <div class="grid grid-cols-2 gap-2 text-[10px]">
              <div class="border border-app-border bg-app-surface/50 rounded-lg p-2 flex.col items-start">
                <div class="flex items-center space-x-1.5 text-app-text-secondary mb-1">
                  <Terminal class="w-3.5 h-3.5 text-accent-blue" />
                  <span class="font-bold">Laravel API</span>
                </div>
                <span class="text-emerald-500 font-bold">200 OK</span>
                <span class="text-app-text-secondary ml-1.5">(14ms)</span>
              </div>
              <div class="border border-app-border bg-app-surface/50 rounded-lg p-2 flex.col items-start">
                <div class="flex items-center space-x-1.5 text-app-text-secondary mb-1">
                  <Shield class="w-3.5 h-3.5 text-amber-500" />
                  <span class="font-bold">AWS Status</span>
                </div>
                <span class="text-emerald-500 font-bold">Healthy</span>
                <span class="text-app-text-secondary ml-1.5">(US-East)</span>
              </div>
            </div>

            <div class="text-[10px] text-app-text-secondary bg-app-surface/40 p-2.5 rounded-lg border border-app-border flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Play class="w-3.5 h-3.5 text-accent-blue animate-pulse" />
                <span>Monitoring websocket connections...</span>
              </div>
              <span class="font-mono text-emerald-500 animate-ping">●</span>
            </div>
          </div>

          <!-- Mockup Footer -->
          <div class="border-t border-app-border pt-3 flex items-center justify-between text-[10px] text-app-text-secondary font-mono">
            <span>Branch: <span class="text-app-text-primary">main</span></span>
            <span class="flex items-center">
              <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
              99.98% System Uptime
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
