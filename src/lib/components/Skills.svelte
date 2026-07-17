<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { skillCategories } from '$lib/data/portfolio';
  import {
    Server, Code, Cpu, Terminal, Shuffle,
    Sparkles, Layers, Globe, Smartphone, Database,
    Cloud, Settings, RefreshCw, Braces
  } from '@lucide/svelte';

  const iconMap: Record<string, any> = {
    laravel: Server,
    php: Code,
    node: Cpu,
    express: Terminal,
    api: Shuffle,
    svelte: Sparkles,
    react: Layers,
    javascript: Braces,
    typescript: Braces,
    tailwind: Globe,
    bootstrap: Layers,
    flutter: Smartphone,
    reactnative: Smartphone,
    swift: Smartphone,
    mysql: Database,
    redis: Database,
    mongodb: Database,
    aws: Cloud,
    docker: Layers,
    linux: Settings,
    githubactions: RefreshCw
  };
</script>

<section id="skills" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Skills & Technologies"
      subtitle="A mature, battle-tested stack spanning backend orchestration, frontend experiences, mobile apps, and cloud DevOps."
      badge="Stack"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
      {#each skillCategories as category}
        <div class="rounded-2xl border border-app-border bg-app-surface/30 p-6 glass hover:border-accent-blue/30 transition-all duration-300 flex flex-col justify-between">
          <div class="space-y-4">
            <h3 class="text-sm font-bold text-app-text-primary tracking-wider uppercase font-mono border-b border-app-border pb-3">
              {category.category}
            </h3>
            <ul class="space-y-3">
              {#each category.skills as skill}
                {@const Icon = iconMap[skill.icon] || Code}
                <li class="flex items-center space-x-3 text-app-text-secondary hover:text-app-text-primary transition-colors duration-200 group">
                  <div class="w-8 h-8 rounded-lg bg-app-surface border border-app-border flex items-center justify-center text-app-text-secondary group-hover:text-accent-blue group-hover:border-accent-blue/30 transition-all duration-200">
                    <Icon class="w-4 h-4" />
                  </div>
                  <span class="text-xs font-medium font-inter">{skill.name}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
