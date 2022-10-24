const ScrollReveal = {
    mounted(el, binding, vnode, prevVnode) {
        const observer = new IntersectionObserver((entries, observe) => {
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
        observer.observe(el);
    },
}

export default ScrollReveal;