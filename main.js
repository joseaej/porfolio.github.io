document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Deja de observar la sección después de la animación
            }
        });
    }, { threshold: 0.2 }); // Se activa cuando el 20% de la sección es visible

    sections.forEach(section => {
        observer.observe(section);
    });
});
