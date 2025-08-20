<section id="formulario-1">
    <div class="container box-white-content">
        <div class="row">
            <div class="col-5 d-xl-block d-none">
                <!-- <img class="image-formulario-home" src="wp-content/themes/iexe-unicorn/assets/img/home/formulario-chico.png" alt="image back" /> -->
                <img class="image-formulario-homes img-fluid" src="assets/img/home/formulario-chico.png" alt="image back" />
            </div>  
            <!-- <div class="col-1">
            </div>   -->
            <div class="col-xl-7 col-12 g-5 columna-formulario-1">
                <div class="content-formulario-1">
                    <h2 class="titulo-formulario">¿Deseas recibir información detallada  de nuestros programas educativos?</h2>
                <p class="parrafo-formulario">Estudia uno de nuestros programas de <strong>educación a distancia</strong> totalmente digital y adaptable. No descuides el resto de tus actividades, gracias a una plataforma abierta las 24 horas del día, todos los días. Pertenece a una <strong>universidad en línea</strong> con más de dos décadas de experiencia en educación en línea.</p>
                <form>
                    <div class="form-group">
                        <label for="nombre">Nombre completo*</label>
                        <input type="text" name="nombre" placeholder="Ingresa aquí tu nombre" class="form-control" id="nombre" aria-describedby="emailHelp" oninput="validarSoloLetras(this)" required>
                    </div>
                    <div class="form-group">
                            <label for="correo">Correo electrónico*</label>
                            <input name="email" type="email" placeholder="Ingresa aquí tu correo electrónico" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                        </div>
                        <div class="form-group">
                            <label for="telefono">Teléfono móvil*</label> <br />
                            <input name="telefono" type="tel" placeholder="Ingresa aquí tu número telefónico" class="form-control" id="telefono" aria-describedby="emailHelp" pattern="[0-9]{7,12}" minlength="7" maxlength="12" oninput="validarSoloDigitos(this)" required style="width: 100%;">
                        </div>
                    <div class="form-group">
                        <label for="programa-interes">Selecciona un programa</label>
                        <?php $args = ['programas']; include_once '/selectProgramas.php'; ?>
                    </div>
                    <?php include_once '/formularios-convenios.php'; ?>
                    <div class="col-12 text-center mt-3">
                        <!-- <button type="submit" class="enviar-landing btn sin-form btn-primario mt-3 ld-ext-right" onclick="return validarFormulario();">Enviar registro <div class="ld ld-ring ld-spin"></div></button> -->
                        <button type="submit" class="enviar-formulario btn-fill px-5 py-2 mb-2" onclick="return validarFormulario();">Enviar registro <div class="ld ld-ring ld-spin"></div></button>
                        <br />
                        <p><span class="disclaimer">Al ingresar tus datos, aceptas nuestro <a href="https://iexe.edu.mx/aviso-de-privacidad/">Aviso de Privacidad</a>.</span></p>
                    </div>
                </form>
                </div>
            </div>  
        </div>  
    </div>  
</section>