<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { certifications, educationList } from '$lib/data/portfolio';
  import { Award, Calendar, BookOpen, GraduationCap } from '@lucide/svelte';
</script>

<section id="certifications" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Education & Credentials"
      subtitle="Academic degrees and industry certifications validating computer applications and accounting expertise."
      badge="Qualifications"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
      
      <!-- Education Block -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold text-app-text-primary tracking-tight font-geist flex items-center">
          <GraduationCap class="w-5 h-5 text-accent-blue mr-2.5" />
          Academic Background
        </h3>
        
        <div class="relative pl-6 border-l timeline-line space-y-8">
          {#each educationList as edu}
            <div class="relative group">
              <!-- Dot Marker -->
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-app-bg border-2 border-accent-blue transition-transform duration-300 group-hover:scale-110"></div>
              
              <div class="space-y-1.5">
                <span class="inline-flex items-center text-[9px] font-mono text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
                  {edu.duration}
                </span>
                <h4 class="text-sm font-bold text-app-text-primary font-geist group-hover:text-accent-blue transition-colors duration-200">
                  {edu.degree}
                </h4>
                <p class="text-xs text-app-text-secondary font-inter">
                  {edu.institution}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Certifications Block -->
      <div class="space-y-6">
        <h3 class="text-lg font-bold text-app-text-primary tracking-tight font-geist flex items-center">
          <Award class="w-5 h-5 text-accent-blue mr-2.5" />
          Certifications
        </h3>

        <div class="space-y-4">
          {#each certifications as cert}
            <div class="group rounded-2xl border border-app-border bg-app-surface/30 p-5 glass hover:border-accent-blue/30 transition-all duration-300 flex items-start space-x-4">
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
                    <Calendar class="w-3.5 h-3.5 text-accent-blue mr-1" />
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>
