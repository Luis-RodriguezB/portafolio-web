const ScrollReveal = {
  mounted(el, binding, vnode, prevVnode) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.childNodes.forEach((el) => el.classList.add('fadeInDown'));
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(el);
  },
};

export default ScrollReveal;