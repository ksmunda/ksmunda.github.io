<script lang="ts">
  import { onMount } from 'svelte';

  let { value, suffix = '', duration = 2000 } = $props<{
    value: number;
    suffix?: string;
    duration?: number;
  }>();

  let displayValue = $state(0);
  let element: HTMLElement | null = $state(null);
  let hasAnimated = false;

  const startAnimation = () => {
    if (hasAnimated) return;
    hasAnimated = true;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      displayValue = Math.floor(easeProgress * value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        displayValue = value; // ensure it ends precisely on value
      }
    };
    window.requestAnimationFrame(step);
  };

  onMount(() => {
    if (!element) return;
    
    // Intersection observer so it only starts counting when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<span bind:this={element} class="font-mono tabular-nums font-bold tracking-tight">
  {displayValue}{suffix}
</span>
