<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { services } from '$lib/data/portfolio';
  import {
    Layers, Code, Compass, Cpu, Users, Cloud, Shuffle, Award, Check
  } from '@lucide/svelte';

  const iconMap: Record<string, any> = {
    layers: Layers,
    code: Code,
    compass: Compass,
    cpu: Cpu,
    users: Users,
    cloud: Cloud,
    shuffle: Shuffle,
    award: Award
  };
</script>

<section id="services" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Services & Specialties"
      subtitle="Comprehensive technical capabilities designed to move software projects from concept to production-level scaling."
      badge="Scope"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {#each services as svc}
        {@const Icon = iconMap[svc.icon] || Code}
        <div class="group rounded-2xl border border-app-border bg-app-surface/30 p-6 glass hover:border-accent-blue/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-accent-blue/2">
          
          <div class="space-y-4">
            <!-- Icon -->
            <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform duration-300">
              <Icon class="w-5 h-5" />
            </div>

            <!-- Header -->
            <h3 class="text-base font-bold text-app-text-primary tracking-tight font-geist">
              {svc.title}
            </h3>

            <!-- Description -->
            <p class="text-xs text-app-text-secondary leading-relaxed font-inter">
              {svc.description}
            </p>
          </div>

          <!-- Feature bullet points -->
          <div class="mt-6 pt-4 border-t border-app-border">
            <ul class="space-y-2">
              {#each svc.features as feat}
                <li class="flex items-start text-[10px] text-app-text-secondary font-inter">
                  <Check class="w-3.5 h-3.5 text-accent-blue mr-2 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              {/each}
            </ul>
          </div>

        </div>
      {/each}
    </div>
  </div>
</section>
