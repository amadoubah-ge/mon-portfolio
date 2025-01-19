document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main > section");

    // Afficher une section par défaut
    const defaultSection = document.querySelector("section.default");
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
});
