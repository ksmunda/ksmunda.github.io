<script lang="ts">
  import { statistics } from '$lib/data/portfolio';
  import AnimatedCounter from './AnimatedCounter.svelte';
</script>

<section class="py-12 md:py-20 border-y border-app-border bg-app-surface/20 transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
      {#each statistics as stat}
        <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5 p-4 rounded-xl hover:bg-app-surface/30 transition-colors duration-300">
          <div class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-geist text-gradient-accent">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <span class="text-xs font-semibold text-app-text-primary uppercase tracking-wider font-mono">
            {stat.label}
          </span>
          <p class="text-[10px] text-app-text-secondary leading-normal max-w-[150px] font-inter">
            {stat.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
