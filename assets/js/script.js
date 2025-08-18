// funcion para obtener la IP del usuario
document.addEventListener("DOMContentLoaded", function () {
    if (typeof jQuery !== 'undefined') {
        $.ajax({
        type: "POST",
        dataType: 'json',
        url: "https://app.iexe.edu.mx/api-registro/Localizacion/ubicacion",
        data: {
            ip: "<?php echo esc_js($ip_usuario); ?>"
        },
        success: function(datos) {
            if (datos.pais === "EC") {
            $(".ecuador").text("Solo disponible en México");
            $(".ecuador").removeAttr("href");
            $(".ecuador-derecho").remove();
            }
        },
        error: function(xhr, status, error) {
            console.warn("Error en la geolocalización:", error);
        }
        });
    } else {
        console.warn("jQuery no está disponible");
    }
});