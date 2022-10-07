<template>
  <main class="h-100">
    <NavLinks/>
    <HeroSection/>
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
    <FooterSection/>
  </main>
</template>

<script>
import NavLinks from '../components/NavLinks.vue';
import HeroSection from '../layouts/HeroSection.vue';
import SkillSection from '../layouts/SkillSection.vue';
import ProjectSection from '../layouts/ProjectSection.vue';
import ContactSection from '../layouts/ContactSection.vue';
import FooterSection from '../layouts/FooterSection.vue';

export default {
  components: {
    NavLinks,
    HeroSection,
    SkillSection,
    ProjectSection,
    ContactSection,
    FooterSection
  },
};
</script>