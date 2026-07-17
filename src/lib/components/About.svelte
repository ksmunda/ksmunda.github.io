<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { personalInfo } from '$lib/data/portfolio';
  import { Shield, Settings, Users, Flame } from '@lucide/svelte';
</script>

<section id="about" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="About Me"
      subtitle="A fusion of business leadership, technical architecture, and project execution."
      badge="Identity"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
      <!-- Left Column: Biography -->
      <div class="lg:col-span-6 space-y-6">
        <h3 class="text-2xl font-bold tracking-tight text-app-text-primary font-geist">
          Specializing in High-Scale Enterprise Software & Technical Leadership
        </h3>
        
        <p class="text-base text-app-text-secondary leading-relaxed font-inter">
          With over 15 years in the tech industry, I have navigated the lifecycle of software development from every angle—as an engineer writing core code, as a Solutions Architect designing scalable databases, and as a Project Manager coordinating cross-functional teams to launch high-performance apps.
        </p>

        <p class="text-base text-app-text-secondary leading-relaxed font-inter">
          As the founder of <strong class="text-app-text-primary">NUVRO</strong>, I lead projects with a strict focus on system durability, maintainability, and clean architecture. I bridge the gap between complex engineering realities and business timelines, ensuring products release on schedule without accruing technical debt.
        </p>

        <p class="text-base text-app-text-secondary leading-relaxed font-inter">
          Whether managing distributed squads using Scrum methodology, mapping out microservices configurations, or writing core PHP/Node services, my goal remains constant: building premium, enterprise-grade software that drives business outcomes.
        </p>
      </div>

      <!-- Right Column: Focus Pillars -->
      <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <!-- Pillar 1 -->
        <div class="p-6 rounded-2xl border border-app-border bg-app-surface/40 hover:bg-app-surface/80 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform duration-300">
            <Settings class="w-5 h-5" />
          </div>
          <h4 class="text-base font-bold text-app-text-primary font-geist mb-2">Technical Architect</h4>
          <p class="text-xs text-app-text-secondary leading-relaxed font-inter">
            Designing robust systems using Laravel, RESTful APIs, Node.js, and relational databases. Prioritizing performance, scale, and strict data integrity.
          </p>
        </div>

        <!-- Pillar 2 -->
        <div class="p-6 rounded-2xl border border-app-border bg-app-surface/40 hover:bg-app-surface/80 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform duration-300">
            <Users class="w-5 h-5" />
          </div>
          <h4 class="text-base font-bold text-app-text-primary font-geist mb-2">Project Manager</h4>
          <p class="text-xs text-app-text-secondary leading-relaxed font-inter">
            Coordinating engineering tasks, sprint planning, and backlog grooming. Bridging developers, QA, and client stakeholders using Agile practices.
          </p>
        </div>

        <!-- Pillar 3 -->
        <div class="p-6 rounded-2xl border border-app-border bg-app-surface/40 hover:bg-app-surface/80 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform duration-300">
            <Flame class="w-5 h-5" />
          </div>
          <h4 class="text-base font-bold text-app-text-primary font-geist mb-2">Founder & Entrepreneur</h4>
          <p class="text-xs text-app-text-secondary leading-relaxed font-inter">
            Leading NUVRO from concept to a successful software house. Scoping client projects, building business relationships, and hiring technical talent.
          </p>
        </div>

        <!-- Pillar 4 -->
        <div class="p-6 rounded-2xl border border-app-border bg-app-surface/40 hover:bg-app-surface/80 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform duration-300">
            <Shield class="w-5 h-5" />
          </div>
          <h4 class="text-base font-bold text-app-text-primary font-geist mb-2">Security & Quality Focus</h4>
          <p class="text-xs text-app-text-secondary leading-relaxed font-inter">
            Implementing solid-state secure databases, TLS policies, encrypted storage, and containerized Docker layers on cloud platforms.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
