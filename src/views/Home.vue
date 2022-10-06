
<template>
    <main class="h-100">
        <HeroSection />
        <ContactSection />
    </main>
</template>

<script>
import HeroSection from '../layouts/HeroSection.vue';
import ContactSection from '../layouts/ContactSection.vue';

export default {
    components: {
        HeroSection,
        ContactSection
    }
}

</script>