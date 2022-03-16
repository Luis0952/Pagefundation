<?php
$destinatario='luchorosalesc6@gmail.com';
//este es el correo a donde se enviara el mensaje
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$mensaje=$_POST['mensaje'];

$header="Enviado desde la Página de la fundación SION Emprender Social";
$mensajecompleto=$mensaje."\nAtentamente: ". $nombre;
mail($destinatario, $mensaje, $header);
echo "<script>alert('Correo enviado exitosamente')</scritp>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</scritp>";
?>