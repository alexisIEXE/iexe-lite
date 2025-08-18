jQuery("#lista-convenios").hide();
jQuery(document).ready(function(){
    jQuery('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            jQuery("#lista-convenios").show();
        }
        else if($(this).prop("checked") == false){
            jQuery("#lista-convenios").hide();
        }
    });
});

// ajustes de formulario telefono iconos
window.addEventListener('DOMContentLoaded', function() {
        var inputing = document.querySelector("#telefono");
        var iti = window.intlTelInput(inputing, {
        localizedCountries: { 'us': 'Estados Unidos' },
        preferredCountries: ['mx','co', 'cr', 'py', 'pe' , 'ec', 'us' ],
        onlyCountries: [ 'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'ES', 'US' , 'UY', 'VE'],
        separateDialCode: true,
        utilsScript: "wp-content/themes/iexe-unicorn/assets/js/utils.js",
        });
    });