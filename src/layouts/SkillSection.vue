<template>
  <SectionContainer
    :title="title"
    titleType="Heading_2"
    sectionClass="skill-section container"
    containerClass="d-flex flex-column w-100 h-100"
    titleClass="text-center underline d-flex flex-column"
  >
    <div class="skills-container d-flex justify-center align-center">
      <div class="skill-list">
        <Skill
          v-for="{ title, skills, description, icon } in skills"
          :key="title"
          :title="title"
          :description="description"
          :knowledge="skills"
          :icon="icon"
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
    const { title, skills  } = getSkills;
    return {
      title,
      skills
    };
  },
};
</script>