<template>
  <router-link v-if="typeButton === 'router'" :to="to" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
    <slot></slot>
  </router-link>
  <a v-else-if="typeButton === 'link'" :href="href" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
    <slot></slot>
  </a>
  <button v-else :type="typeButton" v-bind="$attrs">
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    typeButton: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: '#',
    },
    to: {
      type: String,
      default: '/',
    },
    icon: {
      type: String,
    },
  },
};
</script>