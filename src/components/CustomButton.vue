<template>
  <router-link v-if="typeButton === 'router'" :to="to" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
  </router-link>
  <a v-else-if="typeButton === 'link'" :href="href" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
  </a>
  <button v-else :type="typeButton" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    typeButton: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: '#'
    },
    to: {
      type: String,
      default: '/'
    },
    icon: {
      type: String,
    },
  },
};
</script>
