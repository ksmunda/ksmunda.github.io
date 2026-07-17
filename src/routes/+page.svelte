<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Services from '$lib/components/Services.svelte';
  import Certifications from '$lib/components/Certifications.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { personalInfo } from '$lib/data/portfolio';

  const siteUrl = 'https://ksmunda.github.io/kulveersingh.github.io';
  const metaDescription = `${personalInfo.name} is an experienced ${personalInfo.title} and Founder of ${personalInfo.company}, specializing in high-performance enterprise systems, database design, cloud deployments, and agile leadership.`;
  
  // Structured JSON-LD Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "url": siteUrl,
    "image": `${siteUrl}/assets/avatar.png`,
    "sameAs": [
      personalInfo.github,
      personalInfo.linkedin
    ],
    "worksFor": {
      "@type": "Organization",
      "name": personalInfo.company,
      "url": "https://nuvro.in"
    },
    "description": personalInfo.introduction,
    "knowsAbout": [
      "Software Development",
      "Technical Project Management",
      "SaaS Architecture",
      "Laravel",
      "Svelte",
      "Node.js",
      "Cloud Deployment",
      "AWS",
      "Docker"
    ]
  };
</script>

<svelte:head>
  <!-- General Metadata -->
  <meta name="description" content={metaDescription} />
  <link rel="canonical" href={siteUrl} />

  <!-- OpenGraph Cards -->
  <meta property="og:site_name" content="Kulveer Singh Portfolio" />
  <meta property="og:title" content="Kulveer Singh | Technical PM & Senior Full Stack Architect" />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:type" content="profile" />
  <meta property="og:image" content="{siteUrl}/assets/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kulveer Singh | Technical PM & Senior Full Stack Architect" />
  <meta name="twitter:description" content={metaDescription} />
  <meta name="twitter:image" content="{siteUrl}/assets/og-image.png" />

  <!-- Structured Data (JSON-LD) -->
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!-- Sticky Header Navigation -->
<Navbar />

<main class="relative z-10 w-full overflow-x-hidden">
  <!-- Hero Section -->
  <Hero />

  <!-- Counters / Stats -->
  <Stats />

  <!-- About Section -->
  <About />

  <!-- Technical Skills -->
  <Skills />

  <!-- Interactive Career Journey / Experience Timeline -->
  <Experience />

  <!-- Projects Showcase & Case Studies -->
  <Projects />

  <!-- Services Offered -->
  <Services />

  <!-- Professional Credentials & Certifications -->
  <Certifications />

  <!-- Interactive Contact Gateway -->
  <Contact />
</main>

<!-- Footer -->
<Footer />
