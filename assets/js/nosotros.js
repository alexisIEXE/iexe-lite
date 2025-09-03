document.addEventListener("DOMContentLoaded", function () {
    const row = document.querySelector(".box-plantilla-profesores");
    const infoProfesores = row.querySelectorAll('.profesor-info');


    document.querySelectorAll(".box-profesor").forEach(element => {
        element.addEventListener('click', function () {

            document.querySelectorAll(".box-profesor")
                .forEach(e => {
                    e.parentNode.classList.remove('col-xl-4');
                    e.parentNode.classList.add('col-xl-2');
                    e.children[1].classList.add('d-xl-none');
                });

                
            element.parentNode.classList.remove('col-xl-2');
            element.parentNode.classList.add('col-xl-4');
            element.children[1].classList.remove('d-xl-none');
            
        })
    })
})