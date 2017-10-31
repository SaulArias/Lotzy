<?php
$link =mysql_connect("localhost","root","");
if($link){
    mysql_select_db("academias",$link);
}

$contra = mysqli_real_escape_string($link, $_POST["contra"]);
$nom = mysqli_real_escape_string($link, $_POST["nombre"]);
$ape = mysqli_real_escape_string($link, $_POST["apellido"]);
$corre = mysqli_real_escape_string($link, $_POST["correo"]);
$dire = mysqli_real_escape_string($link, $_POST["direccion"]);
$tel = mysqli_real_escape_string($link, $_POST["telefono"]);

$sql = "INSERT INTO usuario(Password,Nombre,Apellido,Correo,Direccion,Telefono) VALUES('$contra','$nom','$ape','$corre','$dire','$tel')";

if(!mysqli_query($link, $sql)){
    die('Error: ' . mysqli_error($link));
} else {
    echo "Se agregaron los datos"
}
?>
