import { ref } from "vue";

const useToggleElement = () => {
  const refElement = ref(null);

  const openElement = () => {
    if (!refElement.value.classList.contains('visible')) {
      refElement.value.classList.add('visible');
    }
  };
  const closeElement = () => {
    if (refElement.value.classList.contains('visible')) {
      refElement.value.classList.remove('visible');
    }
  };
  const toggleElement = () => {
    refElement.value.classList.toggle('visible');
  };

  return {
    refElement,
    openElement,
    closeElement,
    toggleElement,
  };
};

export default useToggleElement;