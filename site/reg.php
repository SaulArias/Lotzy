<?php
$con = mysqli_connect("localhost", "root", "12345", "muebleriaprimavera");
if(mysqli_connect_errno()){
    echo "No se conecto con la base de datos"
}

$contra = mysqli_real_escape_string($con, $_POST["contra"]);
$nom = mysqli_real_escape_string($con, $_POST["nombre"]);
$ape = mysqli_real_escape_string($con, $_POST["apellido"]);
$corre = mysqli_real_escape_string($con, $_POST["correo"]);
$dire = mysqli_real_escape_string($con, $_POST["direccion"]);
$tel = mysqli_real_escape_string($con, $_POST["telefono"]);

$sql = "INSERT INTO usuario(Password,Nombre,Apellido,Correo,Direccion,Telefono) VALUES('$contra','$nom','$ape','$corre','$dire','$tel')";

if(!mysqli_query($con, $sql)){
    die('Error: ' . mysqli_error($con));
} else {
    echo "Se agregaron los datos"
}
?>
