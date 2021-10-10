<?php
//Recibimos los campos del formulario
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$empresa=$_POST['empresa'];
$telefono=$_POST['telefono'];
$mensaje=$_POST['mensaje'];
// datos para el correo
$destinatario = "carbagc30@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Empresa: $empresa \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header('Location:msgenvio.html');

?>
