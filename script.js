
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main > section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            sections.forEach(section => section.style.display = "none");
            const target = document.getElementById(button.dataset.section);
            if (target) {
                target.style.display = "block";
            }
        });
    });
});


    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    sections.forEach(section => {
        appearOnScroll.observe(section);
    });
});
