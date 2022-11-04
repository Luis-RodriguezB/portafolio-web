const ScrollReveal = {
    mounted(el, binding, vnode, prevVnode) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(({ target, isIntersecting }) => {
                target.childNodes.forEach(el => el.classList.add('hide'));

                if (isIntersecting) {
                    target.childNodes.forEach(el => {
                        el.classList.remove('hide');
                        el.classList.add('fadeInDown');
                    });
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.3
        });
        observer.observe(el);
    },
}

export default ScrollReveal;