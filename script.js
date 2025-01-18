document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main > section");

    // Afficher une section par défaut (par exemple, "À propos")
    const defaultSection = document.getElementById("about");
    if (defaultSection) defaultSection.style.display = "block";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            sections.forEach(section => section.style.display = "none"); // Masquer toutes les sections
            const target = document.getElementById(button.dataset.section);
            if (target) {
                target.style.display = "block"; // Afficher la section sélectionnée
            }
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
