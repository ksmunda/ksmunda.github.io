<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/data/portfolio';

  const categories = ['All', 'Enterprise', 'Finance', 'Recruitment', 'Utility', 'Education', 'Communication', 'IoT', 'Commerce'];
  
  let activeCategory = $state('All');

  // Svelte 5 Derived Rune for reactive filtering
  const filteredProjects = $derived(
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)
  );
</script>

<section id="projects" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Engineering Portfolio"
      subtitle="A catalog of actual systems engineered, focusing on robust architectures, databases, and client integrations."
      badge="Work"
    />

    <!-- Filter Buttons -->
    <div class="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
      {#each categories as category}
        <button
          type="button"
          onclick={() => activeCategory = category}
          class="px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap tracking-wide border cursor-pointer transition-all duration-300 focus:outline-none {activeCategory === category ? 'bg-accent-blue border-accent-blue text-white shadow-xs' : 'bg-app-surface/20 border-app-border text-app-text-secondary hover:text-app-text-primary hover:bg-app-surface/50'}"
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
      {#each filteredProjects as project (project.id)}
        <div class="h-full">
          <ProjectCard {project} />
        </div>
      {:else}
        <div class="col-span-full py-16 text-center rounded-2xl border border-dashed border-app-border bg-app-surface/10">
          <p class="text-sm text-app-text-secondary">No projects found in this category.</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
