gsap.fromTo("#loading-page", { opacity: 1 }, { opacity: 0, duration: 2, delay: 4 });

gsap.fromTo("#name-logo",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
    }
)