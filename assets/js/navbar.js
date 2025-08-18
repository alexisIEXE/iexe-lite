
document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".hover-trigger");
    const boxes = document.querySelectorAll(".navbar-section-box-content");
    const overlay = document.querySelector(".navbar-overlay");
    let timeout;

    triggers.forEach(trigger => {
        const targetId = "content-" + trigger.dataset.target;
        const targetBox = document.getElementById(targetId);
        const innerContainer = targetBox?.querySelector(".container");

        trigger.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        boxes.forEach(b => b.classList.remove("show-box"));
        if (targetBox) targetBox.classList.add("show-box");
        if (overlay) overlay.classList.add("active");
        });

        trigger.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
            if (targetBox) targetBox.classList.remove("show-box");
            if (overlay) overlay.classList.remove("active");
        }, 300);
        });

        if (innerContainer) {
        innerContainer.addEventListener("mouseenter", () => {
            clearTimeout(timeout);
        });

        innerContainer.addEventListener("mouseleave", () => {
            timeout = setTimeout(() => {
            targetBox.classList.remove("show-box");
            if (overlay) overlay.classList.remove("active");
            }, 300);
        });
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".titulo-navbar");

    headers.forEach(header => {
        header.addEventListener("click", function () {
        const targetId = this.dataset.target;
        const lista = document.getElementById(targetId);

        if (lista) {
            lista.classList.toggle("visible");
            this.classList.toggle("abierto");
        }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const grupos = document.querySelectorAll(".grupo-oferta");

    grupos.forEach(grupo => {
        const titulo = grupo.querySelector(".titulo-navbar");
        const lista = grupo.querySelector(".lista-oferta-academica");
        let hideTimeout;

        grupo.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
        lista.classList.add("mostrar");
        titulo.classList.add("activa");
        grupo.classList.add("activo"); 
        });

        grupo.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(() => {
            lista.classList.remove("mostrar");
            titulo.classList.remove("activa");
            grupo.classList.remove("activo");
        }, 3000); // 10 segundos antes de ocultar
        });
    });
});

