document.addEventListener("DOMContentLoaded", function () {
    const row = document.querySelector(".box-plantilla-profesores");
    const infoProfesores = row.querySelectorAll('.profesor-info');

    //Hace que la imagen que quede al centro siempre esté expandida
    (function () {
        const row = document.querySelector('.box-plantilla-profesores');
        if (!row) return;

        function highlightCenter() {
            const rowCenter = row.scrollLeft + row.clientWidth / 2;
            let closest = null;
            let minDist = Infinity;

            row.querySelectorAll('.col-xl-2, .col-xl-4').forEach(col => {
                const rect = col.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const dist = Math.abs(centerX - window.innerWidth / 2); // distancia al centro de pantalla

                if (dist < minDist) {
                    minDist = dist;
                    closest = col;
                }
            });

            if (closest) {
                row.querySelectorAll('.col-xl-2, .col-xl-4').forEach(col => {
                    col.classList.remove('col-xl-4');
                    col.classList.remove('profesor-seleccionado');
                    col.classList.add('col-xl-2');
                    col.querySelector('.box-profesor').querySelector('.profesor-info').classList.add('d-xl-none')
                });
                closest.classList.remove('col-xl-2');
                closest.classList.add('col-xl-4');
                closest.classList.add('profesor-seleccionado');
                closest.querySelector('.box-profesor').querySelector('.profesor-info').classList.remove('d-xl-none')
                const btnVerPresentacion = closest.querySelector('.box-profesor').querySelector('.profesor-info').querySelector('.btn-ver-presentacion')
                if (btnVerPresentacion) {

                    // btnVerPresentacion.addEventListener('click', () => {

                    //     console.log("click")

                    //     if (closest.querySelector('.box-profesor').querySelector('.profesor-info').classList.contains('profesor-presentacion')) {

                    //         console.log('mostrando...')
                    //         closest.querySelector('.box-profesor').querySelector('.profesor-info').classList.remove('profesor-presentacion');
                    //         closest.querySelector('.box-profesor').querySelector('.profesor-info').querySelector('.plantilla-profesor-presentacion').classList.add('d-none');

                    //         btnVerPresentacion.innerHTML = '';
                    //         btnVerPresentacion.innerHTML = 'Ver más ↗';
                    //         // const btnVerMas = document.createElement('i');
                    //         // btnVerMas.innerText = 'Ver más ↗'
                    //         // btnVerPresentacion.appendChild(btnVerMas);

                    //     } else {

                    //         console.log('ocultando...')
                    //         closest.querySelector('.box-profesor').querySelector('.profesor-info').classList.add('profesor-presentacion');
                    //         closest.querySelector('.box-profesor').querySelector('.profesor-info').querySelector('.plantilla-profesor-presentacion').classList.remove('d-none');

                    //         btnVerPresentacion.innerHTML = '';
                    //         btnVerPresentacion.innerHTML = 'Ver menos ↙';
                    //         // const btnVerMenos = document.createElement('i');
                    //         // btnVerMenos.innerText = 'Ver menos ↙'
                    //         // btnVerPresentacion.appendChild(btnVerMenos);

                    //     }

                    // });

                }
            }
        }

        row.addEventListener('scroll', () => {
            window.requestAnimationFrame(highlightCenter);
        });

        // Ejecutar una vez al inicio
        highlightCenter();
    })();

    //Agrega botones para hacer scroll de 5 en 5
    (function () {
        const row = document.querySelector('.box-plantilla-profesores');
        if (!row) return;

        // Crear botones

        const btnLeft = row.querySelector('.nosotros-arrow-sticky-left');
        const btnRight = row.querySelector('.nosotros-arrow-sticky-right');

        // Insertar botones en el DOM (posición relativa al row padre)
        row.parentElement.style.position = "relative";
        row.parentElement.appendChild(btnLeft);
        row.parentElement.appendChild(btnRight);

        function getStep() {
            // Toma el ancho de 5 elementos promedio (según el primero visible)
            const first = row.querySelector('.col-12, .col-md-6, .col-md-4, .col-xl-2, .col-xl-4');
            if (!first) return row.clientWidth; // fallback
            const rect = first.getBoundingClientRect();
            const style = getComputedStyle(first);
            const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            const itemWidth = rect.width + margin;
            return itemWidth * 5;
        }

        btnLeft.addEventListener('click', () => {
            row.scrollBy({ left: -getStep(), behavior: "smooth" });
        });
        btnRight.addEventListener('click', () => {
            row.scrollBy({ left: getStep(), behavior: "smooth" });
        });
    })();

    //Centra la imagen cuando se selecciona
    (function () {
        const row = document.querySelector('.box-plantilla-profesores');
        if (!row || row.dataset.clickCenterCircular) return;
        row.dataset.clickCenterCircular = '1';

        const children = Array.from(row.children);
        const visibleCount = Math.floor(row.clientWidth / children[0].clientWidth); // aprox cuántos caben en pantalla

        // 🔹 Clonar al inicio y final para efecto circular
        for (let i = 0; i < visibleCount; i++) {
            row.appendChild(children[i].cloneNode(true)); // clones al final
            row.insertBefore(children[children.length - 1 - i].cloneNode(true), row.firstChild); // clones al inicio
        }

        // Ajustar scroll inicial (para que no arranque en clones)
        row.scrollLeft = row.scrollWidth / 3;

        function centerCol(col) {
            const rowRect = row.getBoundingClientRect();
            const colRect = col.getBoundingClientRect();

            let target = row.scrollLeft + (colRect.left - rowRect.left / 2) + (colRect.width / 2) - (row.clientWidth / 2);

            if (row.scrollLeft < target) {

                console.log("derecha")
                target = row.scrollLeft + (colRect.left - rowRect.left) + (colRect.width / 2) - (row.clientWidth / 2) - rowRect.left / 2;
            } else {
                console.log("izquierda")
                target = row.scrollLeft + (colRect.left - rowRect.left / 2) + (colRect.width / 2) - (row.clientWidth / 2);
            }


            row.scrollTo({ left: target, behavior: 'smooth' });

            // 🔹 Detectar si estamos en clones y reubicar al original
            setTimeout(() => {
                const allItems = row.querySelectorAll(':scope > *');
                const index = Array.from(allItems).indexOf(col);

                // Si es un clon del inicio → saltamos al original equivalente
                if (index < visibleCount) {
                    const original = allItems[index + children.length];
                    centerCol(original);
                }
                // Si es un clon del final → saltamos al original equivalente
                else if (index >= children.length + visibleCount) {
                    const original = allItems[index - children.length];
                    centerCol(original);
                }
            }, 400);
        }

        function getDirectChild(el) {
            let n = el;
            while (n && n.parentElement !== row) n = n.parentElement;
            return (n && n.parentElement === row) ? n : null;
        }

        // row.addEventListener('click', (e) => {
        //     const img = e.target.closest('img.plantilla-profesores');
        //     if (!img) return;
        //     e.stopImmediatePropagation();
        //     const col = getDirectChild(img);
        //     if (col) centerCol(col);
        // }, { capture: true });

        row.addEventListener('click', (e) => {
            console.log("#e")
            console.log(e.target)
            if (e.target.classList.contains('btn-ver-presentacion')){
                mostrarPresentacion(e.target)
                return;
            }

            // if (e.target.classList.contains('profesor-seleccionado'))
            //     return;
            const box = e.target.closest('.box-profesor');
            console.log("BOX")
            console.log(box)
            if (!box) return;
            console.log("no llego")
            const col = getDirectChild(box);
            if (col) centerCol(col);
        }, { capture: false });

    })();


    function mostrarPresentacion(e) {

        console.log("mostrarPresentacion")
        console.log(e)

        const row = document.querySelector(".box-plantilla-profesores");
        const profesorSeleccionado = row.querySelector('.profesor-seleccionado')
        

        if (profesorSeleccionado.querySelector('.box-profesor').querySelector('.profesor-info').classList.contains('profesor-presentacion')) {

            console.log('mostrando...')
            profesorSeleccionado.querySelector('.box-profesor').querySelector('.profesor-info').classList.remove('profesor-presentacion');
            profesorSeleccionado.querySelector('.box-profesor').querySelector('.profesor-info').querySelector('.plantilla-profesor-presentacion').classList.add('d-none');

            e.innerHTML = '';
            e.innerHTML = 'Ver más ↗';

        }else {

            console.log('ocultando...')
            profesorSeleccionado.querySelector('.box-profesor').querySelector('.profesor-info').classList.add('profesor-presentacion');
            profesorSeleccionado.querySelector('.box-profesor').querySelector('.profesor-info').querySelector('.plantilla-profesor-presentacion').classList.remove('d-none');

            e.innerHTML = '';
            e.innerHTML = 'Ver menos ↙';

        }

    }

});