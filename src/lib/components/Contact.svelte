<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';
  import { personalInfo } from '$lib/data/portfolio';
  import { Mail, MessageSquare, Send, CheckCircle2 } from '@lucide/svelte';
  import GithubIcon from './GithubIcon.svelte';
  import LinkedinIcon from './LinkedinIcon.svelte';

  let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
  let formData = $state({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formStatus = 'submitting';
    
    // Simulate API submission
    setTimeout(() => {
      formStatus = 'success';
      formData = { name: '', email: '', subject: '', message: '' };
      
      // Reset back to idle after 5 seconds
      setTimeout(() => {
        formStatus = 'idle';
      }, 5000);
    }, 1500);
  };
</script>

<section id="contact" class="py-20 md:py-32 bg-app-bg transition-colors duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Get In Touch"
      subtitle="Have an enterprise project to scope, a team to scale, or a consulting engagement? Let's talk."
      badge="Contact"
    />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
      
      <!-- Left Column: Info Cards -->
      <div class="lg:col-span-5 space-y-6">
        <h3 class="text-xl font-bold tracking-tight text-app-text-primary font-geist">
          Direct Channels
        </h3>
        <p class="text-sm text-app-text-secondary leading-relaxed font-inter">
          Whether you want to discuss a software architecture solution, hire me for full-stack engineering, or consult on a Project Management lifecycle, pick a method below.
        </p>

        <div class="space-y-4 pt-2">
          
          <!-- Email -->
          <a
            href="mailto:{personalInfo.email}"
            class="flex items-center space-x-4 p-4.5 rounded-xl border border-app-border bg-app-surface/30 hover:bg-app-surface/60 hover:border-accent-blue/30 transition-all duration-300 group"
          >
            <div class="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform duration-300">
              <Mail class="w-5 h-5" />
            </div>
            <div>
              <span class="block text-xs font-bold text-app-text-primary font-mono tracking-wider uppercase">Email</span>
              <span class="text-sm text-app-text-secondary font-inter group-hover:text-accent-blue transition-colors duration-200">{personalInfo.email}</span>
            </div>
          </a>

          <!-- WhatsApp -->
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-4 p-4.5 rounded-xl border border-app-border bg-app-surface/30 hover:bg-app-surface/60 hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform duration-300">
              <MessageSquare class="w-5 h-5" />
            </div>
            <div>
              <span class="block text-xs font-bold text-app-text-primary font-mono tracking-wider uppercase">WhatsApp</span>
              <span class="text-sm text-app-text-secondary font-inter group-hover:text-emerald-500 transition-colors duration-200">Message directly</span>
            </div>
          </a>

          <!-- LinkedIn -->
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-4 p-4.5 rounded-xl border border-app-border bg-app-surface/30 hover:bg-app-surface/60 hover:border-accent-blue/30 transition-all duration-300 group"
          >
            <div class="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform duration-300">
              <LinkedinIcon class="w-5 h-5" />
            </div>
            <div>
              <span class="block text-xs font-bold text-app-text-primary font-mono tracking-wider uppercase">LinkedIn</span>
              <span class="text-sm text-app-text-secondary font-inter group-hover:text-accent-blue transition-colors duration-200">Connect professionally</span>
            </div>
          </a>

          <!-- GitHub -->
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-4 p-4.5 rounded-xl border border-app-border bg-app-surface/30 hover:bg-app-surface/60 hover:border-app-text-primary/30 transition-all duration-300 group"
          >
            <div class="w-10 h-10 rounded-lg bg-app-surface border border-app-border flex items-center justify-center text-app-text-primary group-hover:scale-105 transition-transform duration-300">
              <GithubIcon class="w-5 h-5" />
            </div>
            <div>
              <span class="block text-xs font-bold text-app-text-primary font-mono tracking-wider uppercase">GitHub</span>
              <span class="text-sm text-app-text-secondary font-inter group-hover:text-app-text-primary transition-colors duration-200">Review repositories</span>
            </div>
          </a>

        </div>
      </div>

      <!-- Right Column: Form -->
      <div class="lg:col-span-7">
        <div class="p-6 md:p-8 rounded-2xl border border-app-border bg-app-surface/20 glass shadow-xl">
          
          {#if formStatus === 'success'}
            <div class="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 animate-bounce">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-lg font-bold text-app-text-primary font-geist">Message Dispatched!</h3>
              <p class="max-w-md text-sm text-app-text-secondary font-inter leading-relaxed">
                Thank you for reaching out. I have received your message and will review it promptly. You can expect a response within 24 hours.
              </p>
            </div>
          {:else}
            <form onsubmit={handleSubmit} class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Name -->
                <div class="space-y-1.5">
                  <label for="name" class="text-xs font-bold text-app-text-primary tracking-wider uppercase font-mono">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    bind:value={formData.name}
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="John Doe"
                    class="w-full px-4 py-3 rounded-xl border border-app-border bg-app-surface/50 text-app-text-primary text-sm placeholder-app-text-secondary/50 focus:border-accent-blue/50 focus:bg-app-surface focus:outline-none transition-all duration-200"
                  />
                </div>
                <!-- Email -->
                <div class="space-y-1.5">
                  <label for="email" class="text-xs font-bold text-app-text-primary tracking-wider uppercase font-mono">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    bind:value={formData.email}
                    required
                    disabled={formStatus === 'submitting'}
                    placeholder="john@example.com"
                    class="w-full px-4 py-3 rounded-xl border border-app-border bg-app-surface/50 text-app-text-primary text-sm placeholder-app-text-secondary/50 focus:border-accent-blue/50 focus:bg-app-surface focus:outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div class="space-y-1.5">
                <label for="subject" class="text-xs font-bold text-app-text-primary tracking-wider uppercase font-mono">Subject</label>
                <input
                  type="text"
                  id="subject"
                  bind:value={formData.subject}
                  required
                  disabled={formStatus === 'submitting'}
                  placeholder="Enterprise project engagement"
                  class="w-full px-4 py-3 rounded-xl border border-app-border bg-app-surface/50 text-app-text-primary text-sm placeholder-app-text-secondary/50 focus:border-accent-blue/50 focus:bg-app-surface focus:outline-none transition-all duration-200"
                />
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <label for="message" class="text-xs font-bold text-app-text-primary tracking-wider uppercase font-mono">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  bind:value={formData.message}
                  required
                  disabled={formStatus === 'submitting'}
                  placeholder="Tell me about your project, scope, and target timelines..."
                  class="w-full px-4 py-3 rounded-xl border border-app-border bg-app-surface/50 text-app-text-primary text-sm placeholder-app-text-secondary/50 focus:border-accent-blue/50 focus:bg-app-surface focus:outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                class="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-accent-blue hover:bg-accent-blue/95 disabled:bg-accent-blue/40 disabled:cursor-not-allowed rounded-full transition-all duration-200 cursor-pointer shadow-md shadow-accent-blue/20"
              >
                {#if formStatus === 'submitting'}
                  <span class="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2"></span>
                  Sending Message...
                {:else}
                  Send Message
                  <Send class="w-4 h-4 ml-2" />
                {/if}
              </button>
            </form>
          {/if}

        </div>
      </div>

    </div>
  </div>
</section>
