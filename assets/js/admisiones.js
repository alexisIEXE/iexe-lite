document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.querySelector('.admision-programas-contenedor');
    const scrollIzquierdo = contenedor.querySelector('.scroll-izquierdo');
    const scrollDerecho = contenedor.querySelector('.scroll-derecho');

    const scrollerBanderas = document.querySelector('.contenedor-banderas');
    const scrollIzquierdoBanderas = scrollerBanderas.querySelector('.scroll-izquierdo');
    const scrollDerechoBanderas = scrollerBanderas.querySelector('.scroll-derecho');


    contenedor.addEventListener("scroll", () => {
        if (contenedor.scrollLeft === 0) {
            console.log("➡️ Llegaste al borde izquierdo");
            scrollIzquierdo.classList.add('d-none');
            return;
        }

        if (contenedor.scrollLeft + contenedor.clientWidth + 1 >= contenedor.scrollWidth) {
            console.log("⬅️ Llegaste al borde derecho");
            scrollDerecho.classList.add('d-none');
            return;
        }

        scrollIzquierdo.classList.remove('d-none');
        scrollDerecho.classList.remove('d-none');
    });

    scrollIzquierdo.addEventListener("click", () => {
        contenedor.scrollBy({
            left: -contenedor.clientWidth,
            behavior: "smooth"
        });
    });

    scrollDerecho.addEventListener("click", () => {
        let espacioAgregado = 0;
        if( scrollIzquierdo.classList.contains('d-none') ){
            espacioAgregado = 42;
        }
        contenedor.scrollBy({
            left: contenedor.clientWidth + espacioAgregado, // avanza una “pantalla”
            behavior: "smooth"
        });
    });

    scrollerBanderas.addEventListener("scroll", () => {
        if (scrollerBanderas.scrollLeft === 0) {
            console.log("➡️ Llegaste al borde izquierdo");
            scrollIzquierdoBanderas.classList.add('d-none');
            return;
        }

        if (scrollerBanderas.scrollLeft + scrollerBanderas.clientWidth + 2 >= scrollerBanderas.scrollWidth) {
            console.log("⬅️ Llegaste al borde derecho");
            scrollDerechoBanderas.classList.add('d-none');
            return;
        }

        scrollIzquierdoBanderas.classList.remove('d-none');
        scrollDerechoBanderas.classList.remove('d-none');
    });

    scrollIzquierdoBanderas.addEventListener("click", () => {
        scrollerBanderas.scrollBy({
            left: -scrollerBanderas.clientWidth,
            behavior: "smooth"
        });
    });

    scrollDerechoBanderas.addEventListener("click", () => {
        scrollerBanderas.scrollBy({
            left: scrollerBanderas.clientWidth, // avanza una “pantalla”
            behavior: "smooth"
        });
    });


    contenedor.querySelectorAll(".admision-programa-academico").forEach(element => {
        element.addEventListener('click', function () {
            document.querySelectorAll(".admision-programa-academico")
                .forEach(e => {
                    e.classList.remove("admision-programa-academico-seleccionado");
                });
            element.classList.add("admision-programa-academico-seleccionado");
        });
    });



    document.querySelectorAll(".box-paso-incripcion").forEach(element => {
        element.addEventListener('click', function () {
            document.querySelectorAll(".box-paso-incripcion")
                .forEach(e => {
                    e.classList.remove("box-paso-seleccionado-header");
                    e.parentNode.classList.remove('box-paso-inscripcion-seleccionado');
                    e.parentNode.getElementsByClassName('box-paso-seleccionado-body')[0].classList.add('d-none');
                    e.children[0].children[0].classList.remove('admisiones-flecha-blanca-abajo');
                    e.children[0].children[0].classList.add('admisiones-flecha-azul');
                });

            element.classList.add('box-paso-seleccionado-header');
            element.parentNode.classList.add('box-paso-inscripcion-seleccionado');
            element.parentNode.getElementsByClassName('box-paso-seleccionado-body')[0].classList.remove('d-none');
            element.children[0].children[0].classList.remove('admisiones-flecha-azul');
            element.children[0].children[0].classList.add('admisiones-flecha-blanca-abajo');

        });
    });
})