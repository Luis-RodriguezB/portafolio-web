<template>
  <main ref="sectionsRef">
    <HeroSection/>
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
    <FooterSection/>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue';
import HeroSection from '../layouts/HeroSection.vue';
import SkillSection from '../layouts/SkillSection.vue';
import ProjectSection from '../layouts/ProjectSection.vue';
import ContactSection from '../layouts/ContactSection.vue';
import FooterSection from '../layouts/FooterSection.vue';

export default {
  components: {
    HeroSection,
    SkillSection,
    ProjectSection,
    ContactSection,
    FooterSection,
  },
  setup() {
    const sectionsRef = ref(null);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    }, {
      threshold: 0.1
    });

    onMounted(() => {
      sectionsRef.value.childNodes.forEach(elements => {
        observer.observe(elements);
      })
    });


    return {
      sectionsRef
    }
  }
};
</script>