<script lang="ts">
  let { title, subtitle = '', badge = '' } = $props<{
    title: string;
    subtitle?: string;
    badge?: string;
  }>();
</script>

<div class="flex flex-col items-center text-center mb-16 md:mb-24 px-4">
  {#if badge}
    <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20 mb-4 tracking-widest uppercase font-mono">
      {badge}
    </span>
  {/if}
  <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-gradient mb-4 font-geist">
    {title}
  </h2>
  {#if subtitle}
    <p class="max-w-2xl text-sm md:text-base text-app-text-secondary font-inter leading-relaxed">
      {subtitle}
    </p>
  {/if}
</div>
