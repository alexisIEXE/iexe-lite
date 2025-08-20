<?php
// Asegurar que $args exista y sea un array
if (!isset($args) || !is_array($args)) {
    $args = [];
}

$licenciaturas = '<optgroup  label="Licenciaturas">              
<option value="LCPAP">Ciencias Políticas y Administración Pública</option>
<option value="LSP">Seguridad Pública</option>
<option value="LAE">Administración de Empresas</option>
<option value="LD">Derecho</option>
<option value="LCE">Ciencias de la Educación</option>
<option value="LRI">Relaciones Internacionales</option>
</optgroup>';

$maestrias ='<optgroup  label="Maestrías">  
<option value="MDCOA">Derecho Constitucional y Amparo</option>
<option value="MFP">Finanzas Públicas</option>
<option value="MAPP">Administración y Políticas Públicas</option>
<option value="MEPP">Evaluación de Políticas Públicas</option>
<option value="MSPPP">Seguridad Pública y Políticas Públicas</option>
<option value="MAN">Administración de Negocios</option>
<option value="MITI">Tecnologías de la Información</option>
<option value="MCDA">Ciencia de Datos Aplicada</option>
<option value="MIGE">Innovación y Gestión Educativa</option>
<option value="MAIS">Administración de Instituciones de Salud</option>
<option value="MMPOP">Marketing Político y Opinión Pública</option>
<option value="MAG">Auditoria Gubernamental</option>
<option value="MGPM">Gestión Pública Municipal</option>
<option value="MSPAJO">Sistema Penal Acusatorio y Juicio Oral</option>
</optgroup>';

$doctorados ='<optgroup  label="Doctorados">
<option value="DPP">Doctorado en Políticas Públicas</option>
<option value="DSP">Doctorado en Seguridad Pública</option>
</optgroup>';
?>

<select class="form-control select-class" name="programa" id="programa-interes" required>
    <option value="" disabled selected>-- Seleccionar Programa --</option>
    <?php
    if (!array_key_exists('programas', $args)) {
        echo $licenciaturas;
        echo $maestrias;
        echo $doctorados;
    } else {
        foreach ($args['programas'] as $prog) {
            if ($prog === "licenciaturas") echo $licenciaturas;
            if ($prog === "maestrias") echo $maestrias;
            if ($prog === "doctorados") echo $doctorados;
        }
    }
    ?>
</select>