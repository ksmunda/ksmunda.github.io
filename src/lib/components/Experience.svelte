<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { experiences } from '$lib/data/portfolio';
  import { Briefcase, Calendar, ChevronRight } from '@lucide/svelte';

  let selectedIndex = $state(0);
  let selected = $derived(experiences[selectedIndex]);
</script>

<section id="experience" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Professional Journey"
      subtitle="15+ years of delivering software, orchestrating architecture, and managing engineering squads."
      badge="Career"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
      
      <!-- Left side: Timeline Nav list -->
      <div class="lg:col-span-4 space-y-2.5">
        {#each experiences as exp, idx}
          <button
            type="button"
            onclick={() => selectedIndex = idx}
            class="w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none {selectedIndex === idx ? 'bg-app-surface border-accent-blue/30 text-accent-blue shadow-sm shadow-accent-blue/5' : 'bg-transparent border-app-border text-app-text-secondary hover:bg-app-surface/40 hover:text-app-text-primary'}"
          >
            <div class="flex items-center space-x-3.5">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono tracking-tighter transition-all duration-300 {selectedIndex === idx ? 'bg-accent-blue text-white' : 'bg-app-surface border border-app-border text-app-text-secondary'}">
                {exp.logoText}
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold font-geist tracking-wide">{exp.company}</span>
                <span class="text-[10px] text-app-text-secondary font-mono">{exp.duration}</span>
              </div>
            </div>
            <ChevronRight class="w-4 h-4 transition-transform duration-300 {selectedIndex === idx ? 'translate-x-1' : ''}" />
          </button>
        {/each}
      </div>

      <!-- Right side: Detail Card -->
      <div class="lg:col-span-8">
        <div class="p-6 md:p-8 rounded-2xl border border-app-border bg-app-surface/20 glass shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[400px]">
          
          <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-app-border pb-4 gap-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-sm font-bold font-mono text-accent-blue">
                  {selected.logoText}
                </div>
                <div>
                  <h3 class="text-lg font-bold text-app-text-primary font-geist">
                    {selected.role}
                  </h3>
                  <p class="text-xs font-semibold text-app-text-secondary font-inter">
                    {selected.company}
                  </p>
                </div>
              </div>

              <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-app-border bg-app-surface text-[10px] font-mono text-app-text-secondary">
                <Calendar class="w-3 h-3 text-accent-blue" />
                <span>{selected.duration}</span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-sm italic text-app-text-secondary font-inter leading-relaxed">
              {selected.description}
            </p>

            <!-- Responsibilities -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold text-app-text-primary tracking-wider uppercase font-mono">
                Key Accomplishments
              </h4>
              <ul class="space-y-2.5">
                {#each selected.responsibilities as resp}
                  <li class="flex items-start text-xs text-app-text-secondary leading-relaxed font-inter">
                    <span class="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 mr-2.5 shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="pt-6 mt-6 border-t border-app-border">
            <h4 class="text-[10px] font-bold text-app-text-primary tracking-wider uppercase font-mono mb-2.5">
              Technologies Utilized
            </h4>
            <div class="flex flex-wrap gap-1.5">
              {#each selected.techStack as tech}
                <span class="px-2 py-0.5 rounded-md border border-app-border bg-app-surface/50 text-[10px] font-medium font-mono text-app-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-colors duration-200">
                  {tech}
                </span>
              {/each}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
