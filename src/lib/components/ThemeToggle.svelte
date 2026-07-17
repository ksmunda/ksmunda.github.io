<script lang="ts">
  import { themeState } from '$lib/theme.svelte';
  import { Sun, Moon } from '@lucide/svelte';
</script>

<button
  type="button"
  onclick={() => themeState.toggle()}
  class="relative p-2 text-app-text-secondary hover:text-app-text-primary rounded-full border border-app-border bg-app-surface/40 hover:bg-app-surface/80 transition-all duration-300 flex items-center justify-center focus:outline-none overflow-hidden cursor-pointer w-9 h-9"
  aria-label="Toggle theme"
>
  <div class="relative w-4 h-4">
    <!-- Moon Icon -->
    <div class="absolute inset-0 flex items-center justify-center transition-all duration-500 transform {themeState.current === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}">
      <Moon class="w-4 h-4" />
    </div>
    <!-- Sun Icon -->
    <div class="absolute inset-0 flex items-center justify-center transition-all duration-500 transform {themeState.current === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}">
      <Sun class="w-4 h-4" />
    </div>
  </div>
</button>
