<script lang="ts">
  import type { Project } from '$lib/data/portfolio';
  import { ExternalLink, ArrowRight, X, Layers, Sparkles, BookOpen } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';

  let { project } = $props<{ project: Project }>();
  let showCaseStudy = $state(false);
</script>

<div class="group relative rounded-2xl border border-app-border bg-app-surface/30 glass p-5 md:p-6 hover:border-accent-blue/30 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-xl hover:shadow-accent-blue/2">
  
  <div class="space-y-5">
    <!-- Simulated App UI Screenshot Container -->
    <div class="relative w-full aspect-video rounded-xl border border-app-border bg-app-surface overflow-hidden flex items-center justify-center select-none">
      
      <!-- Grid Overlay -->
      <div class="absolute inset-0 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] bg-[size:12px_12px] opacity-40"></div>

      <!-- Project Specific Simulated Mockup -->
      {#if project.id === 'school-management'}
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] space-y-2 flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1">
            <span class="font-bold text-app-text-primary text-[8px]">🏫 ACADEMIC PORTAL</span>
            <span class="text-accent-blue">Term 1</span>
          </div>
          <div class="space-y-1.5 flex-1 pt-1">
            <div class="flex justify-between items-center bg-app-surface/50 p-1 rounded">
              <span>Amit Sharma (Class X)</span>
              <span class="text-emerald-500 font-bold">Grade: A+</span>
            </div>
            <div class="flex justify-between items-center bg-app-surface/50 p-1 rounded">
              <span>Simran Kaur (Class IX)</span>
              <span class="text-emerald-500 font-bold">Grade: A</span>
            </div>
            <div class="flex justify-between items-center bg-app-surface/50 p-1 rounded">
              <span>Rahul Gupta (Class XII)</span>
              <span class="text-amber-500 font-bold">Grade: B+</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-[7px] text-app-text-secondary pt-1 border-t border-app-border">
            <span>Users Active: 452</span>
            <span class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span> Live</span>
          </div>
        </div>

      {:else if project.id === 'hospital-management'}
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] space-y-2 flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1">
            <span class="font-bold text-app-text-primary text-[8px]">🏥 CLINIC OVERVIEW</span>
            <span class="text-emerald-500 font-semibold">OPD Open</span>
          </div>
          <div class="grid grid-cols-2 gap-1.5 py-1">
            <div class="bg-app-surface/60 p-1 rounded flex flex-col">
              <span class="text-[7px] text-app-text-secondary">Admissions</span>
              <span class="font-bold text-app-text-primary text-xs">28 / 50</span>
            </div>
            <div class="bg-app-surface/60 p-1 rounded flex flex-col">
              <span class="text-[7px] text-app-text-secondary">On Duty</span>
              <span class="font-bold text-emerald-500 text-xs">12 Dr.</span>
            </div>
          </div>
          <div class="bg-app-surface/60 p-1 rounded flex items-center justify-between text-[7px]">
            <span>Lab Queue: 4 pending</span>
            <span class="text-accent-blue underline">View</span>
          </div>
        </div>

      {:else if project.id === 'hrms'}
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] space-y-2 flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1">
            <span class="font-bold text-app-text-primary text-[8px]">👥 HR DIRECTORY</span>
            <span class="text-zinc-500">v2.1</span>
          </div>
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[7px] text-app-text-secondary">
              <span>Payroll Processing</span>
              <span class="text-emerald-500 font-bold">100% Done</span>
            </div>
            <div class="w-full bg-app-surface h-1.5 rounded-full overflow-hidden">
              <div class="bg-emerald-500 h-full w-[100%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center text-[7px] bg-app-surface/50 p-1 rounded">
            <span>Pending Leaves: 2 requests</span>
            <span class="text-xs font-bold text-accent-blue">Review</span>
          </div>
        </div>

      {:else if project.id === 'finance-management'}
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] space-y-2 flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1">
            <span class="font-bold text-app-text-primary text-[8px]">📊 GENERAL LEDGER</span>
            <span class="text-emerald-500">+$12,450.00</span>
          </div>
          
          <!-- Mock Chart SVG -->
          <div class="h-10 w-full flex items-end">
            <svg class="w-full h-full text-accent-blue" viewBox="0 0 100 30" fill="none">
              <path d="M0,25 Q15,22 30,12 T60,18 T90,2 T100,5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M0,25 Q15,22 30,12 T60,18 T90,2 T100,5 L100,30 L0,30 Z" fill="currentColor" fill-opacity="0.05" />
            </svg>
          </div>

          <div class="flex items-center justify-between text-[7px] text-app-text-secondary">
            <span>Ledger Balanced</span>
            <span class="text-app-text-primary font-bold">Audit Verified</span>
          </div>
        </div>

      {:else if project.id === 'greenform'}
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] space-y-2 flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1">
            <span class="font-bold text-emerald-500 text-[8px]">☘️ ESG INSPECTIONS</span>
            <span class="text-app-text-secondary">Offline Sync</span>
          </div>
          <div class="space-y-1 text-[7px]">
            <div class="flex items-center space-x-1.5 text-app-text-primary">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Audit: Solar Panel Rig-4</span>
            </div>
            <div class="pl-3 text-app-text-secondary">
              <p>GPS: 28.6139° N, 77.2090° E</p>
              <p>Rating: 9.4/10 (Excellent)</p>
            </div>
          </div>
          <div class="flex justify-between items-center text-[7px] bg-app-surface/60 p-1 rounded">
            <span>Sync queue: 0 pending</span>
            <span class="text-emerald-500 font-bold">Synced</span>
          </div>
        </div>

      {:else}
        <!-- Generic Mockup -->
        <div class="w-[85%] h-[80%] rounded-lg border border-app-border bg-app-bg/80 p-2.5 font-mono text-[9px] flex flex-col justify-between">
          <div class="flex items-center justify-between border-b border-app-border pb-1 text-[7px] text-app-text-secondary">
            <span>SYSTEM METRICS</span>
            <span>ID: {project.id}</span>
          </div>
          <div class="space-y-1 py-1.5 text-[7px]">
            <p class="text-accent-blue">> fetch api/endpoints...</p>
            <p class="text-app-text-secondary">> {project.architecture}</p>
            <p class="text-emerald-500">> response status: 200 ok</p>
          </div>
          <div class="flex items-center justify-between border-t border-app-border pt-1 text-[7px] text-app-text-secondary">
            <span>Repository: Active</span>
            <span class="text-accent-blue font-bold">100% TS</span>
          </div>
        </div>
      {/if}

    </div>

    <!-- Title and Meta -->
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <span class="inline-flex items-center text-[9px] font-bold tracking-widest uppercase font-mono text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
          {project.category}
        </span>
        {#if project.featured}
          <span class="inline-flex items-center text-[9px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <Sparkles class="w-2.5 h-2.5 mr-1" />
            FEATURED
          </span>
        {/if}
      </div>

      <h3 class="text-lg font-bold text-app-text-primary tracking-tight font-geist group-hover:text-accent-blue transition-colors duration-200">
        {project.title}
      </h3>

      <p class="text-xs text-app-text-secondary font-inter leading-relaxed line-clamp-3">
        {project.description}
      </p>
    </div>

    <!-- Key specs -->
    <div class="pt-3 border-t border-app-border space-y-2">
      <div class="flex items-center text-[10px] text-app-text-secondary font-mono">
        <Layers class="w-3.5 h-3.5 text-accent-blue mr-2 shrink-0" />
        <span class="truncate">{project.architecture}</span>
      </div>
    </div>
  </div>

  <div class="space-y-3 pt-5 mt-5 border-t border-app-border">
    <!-- Tech stack tags -->
    <div class="flex flex-wrap gap-1">
      {#each project.techStack as tech}
        <span class="px-1.5 py-0.5 rounded-md border border-app-border bg-app-surface/50 text-[9px] font-mono text-app-text-secondary">
          {tech}
        </span>
      {/each}
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-between pt-2">
      <button
        type="button"
        onclick={() => showCaseStudy = true}
        class="inline-flex items-center text-xs font-semibold text-app-text-primary hover:text-accent-blue transition-colors duration-200 cursor-pointer focus:outline-none"
      >
        <BookOpen class="w-3.5 h-3.5 mr-1.5" />
        Case Study
      </button>

      <div class="flex items-center space-x-3.5">
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
            aria-label="View source code on GitHub"
          >
            <GithubIcon class="w-4 h-4" />
          </a>
        {/if}
        {#if project.liveUrl}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
            aria-label="View live demo website"
          >
            <ExternalLink class="w-4 h-4" />
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Case Study Overlay Modal -->
{#if showCaseStudy}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    onclick={() => showCaseStudy = false}
  >
    <!-- Modal content container -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="relative w-full max-w-2xl rounded-2xl border border-app-border bg-app-surface p-6 md:p-8 space-y-6 overflow-y-auto max-h-[85vh] shadow-2xl glass text-left"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- Close Button -->
      <button
        type="button"
        onclick={() => showCaseStudy = false}
        class="absolute top-5 right-5 p-1 text-app-text-secondary hover:text-app-text-primary rounded-full hover:bg-app-surface/80 border border-app-border cursor-pointer focus:outline-none transition-all duration-200"
        aria-label="Close case study modal"
      >
        <X class="w-4 h-4" />
      </button>

      <!-- Title & Tech -->
      <div class="space-y-2.5">
        <span class="inline-flex items-center text-[10px] font-bold tracking-widest uppercase font-mono text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
          {project.category} Case Study
        </span>
        <h2 class="text-xl md:text-2xl font-bold tracking-tight text-app-text-primary font-geist">
          {project.title}
        </h2>
        <div class="text-xs text-app-text-secondary font-mono flex items-center flex-wrap gap-2">
          <span>Architecture: <span class="text-app-text-primary">{project.architecture}</span></span>
        </div>
      </div>

      <!-- Problem / Solution / Result -->
      <div class="space-y-5 border-t border-app-border pt-5">
        <div class="space-y-1.5">
          <h3 class="text-xs font-bold text-red-500 uppercase tracking-widest font-mono">The Challenge</h3>
          <p class="text-xs md:text-sm text-app-text-secondary font-inter leading-relaxed">
            {project.caseStudy.challenge}
          </p>
        </div>

        <div class="space-y-1.5">
          <h3 class="text-xs font-bold text-accent-blue uppercase tracking-widest font-mono">The Solution</h3>
          <p class="text-xs md:text-sm text-app-text-secondary font-inter leading-relaxed">
            {project.caseStudy.solution}
          </p>
        </div>

        <div class="space-y-1.5">
          <h3 class="text-xs font-bold text-emerald-500 uppercase tracking-widest font-mono">The Outcome</h3>
          <p class="text-xs md:text-sm text-app-text-secondary font-inter leading-relaxed">
            {project.caseStudy.result}
          </p>
        </div>
      </div>

      <!-- Core Features List -->
      <div class="space-y-2.5 border-t border-app-border pt-5">
        <h3 class="text-xs font-bold text-app-text-primary uppercase tracking-widest font-mono">Key Features</h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {#each project.features as feature}
            <li class="flex items-start text-xs text-app-text-secondary font-inter leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 mr-2 shrink-0"></span>
              <span>{feature}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Tech Stack Tags in Case Study -->
      <div class="flex flex-wrap gap-1.5 border-t border-app-border pt-5">
        {#each project.techStack as tech}
          <span class="px-2 py-0.5 rounded-md border border-app-border bg-app-surface text-[10px] font-mono text-app-text-secondary">
            {tech}
          </span>
        {/each}
      </div>

      <!-- Links Footer inside Case Study -->
      <div class="flex items-center justify-end space-x-4 border-t border-app-border pt-5 mt-4">
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-xs font-semibold text-app-text-secondary hover:text-app-text-primary transition-colors duration-200"
          >
            <GithubIcon class="w-4 h-4 mr-1.5" />
            GitHub Repository
          </a>
        {/if}
        {#if project.liveUrl}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-xs font-semibold text-white bg-accent-blue px-4 py-2 rounded-full hover:bg-accent-blue/95 transition-all duration-200"
          >
            Launch Live Demo
            <ExternalLink class="w-3.5 h-3.5 ml-1.5" />
          </a>
        {/if}
      </div>

    </div>
  </div>
{/if}
