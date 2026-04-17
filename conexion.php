<?php
$host = "localhost";
$user = "root"; // Usuario por defecto de XAMPP
$pass = "";     // Contraseña por defecto (vacía)
$db   = "MENU"; // El nombre de la base de datos que creaste

$conexion = mysqli_connect($host, $user, $pass, $db);

// Verificamos si la conexión fue exitosa
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
// Opcional: Configurar caracteres especiales (ñ, acentos)
mysqli_set_charset($conexion, "utf8");
?> 