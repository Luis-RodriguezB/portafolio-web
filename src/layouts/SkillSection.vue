<template>
  <SectionContainer
    id="skill-section"
    :title="$t('skillSection.title')"
    titleType="Heading_2"
    sectionClass="container skill-section"
    containerClass="d-flex flex-column w-100 h-100"
    titleClass="text-center underline d-flex flex-column"
    v-scroll-reveal
  >
    <div class="skills-container d-flex justify-center align-center">
      <div class="skill-list">
        <Skill
          v-for="item in getSkills"
          :key="item.en.title"
          :title="item[ $i18n.locale ].title"
          :description="item[ $i18n.locale ].description"
          :knowledge="item.skills ? item.skills : item[ $i18n.locale ].skills "
          :icon="item.icon"
        />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '../components/SectionContainer.vue';
import Skill from '../components/Skill.vue';
import getSkills from '../data/getSkills';

export default {
  components: {
    SectionContainer,
    Skill,
  },
  setup() {
    return {
      getSkills
    };
  },
};
</script>