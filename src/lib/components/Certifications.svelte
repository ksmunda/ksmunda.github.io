<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { certifications } from '$lib/data/portfolio';
  import { Award, Calendar, ShieldCheck } from '@lucide/svelte';
</script>

<section id="certifications" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Credentials & Certifications"
      subtitle="Industry-recognized professional validations in cloud architecture, project management, and agile delivery."
      badge="Verification"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {#each certifications as cert}
        <div class="group rounded-2xl border border-app-border bg-app-surface/30 p-6 glass hover:border-accent-blue/30 transition-all duration-300 flex items-start space-x-4">
          <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Award class="w-5 h-5" />
          </div>
          <div class="space-y-2">
            <h3 class="text-sm font-bold text-app-text-primary tracking-tight font-geist">
              {cert.title}
            </h3>
            <p class="text-xs text-app-text-secondary font-inter">
              Issued by: <strong class="text-app-text-primary">{cert.issuer}</strong>
            </p>
            <div class="flex items-center space-x-4 text-[10px] text-app-text-secondary font-mono pt-1">
              <span class="flex items-center">
                <Calendar class="w-3 h-3 text-accent-blue mr-1" />
                {cert.date}
              </span>
              {#if cert.credentialId}
                <span class="flex items-center">
                  <ShieldCheck class="w-3 h-3 text-emerald-500 mr-1" />
                  ID: {cert.credentialId}
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
