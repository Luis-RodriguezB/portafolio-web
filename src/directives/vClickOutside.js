const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = function ({ target }) {
      if (!(el === target || el.contains(target))) {
        binding.value(target, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);

    window.onscroll = function() {
      binding.value(el);
    }
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default vClickOutside;