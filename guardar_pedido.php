<?php
include 'conexion.php'; // Aquí conectamos con tu archivo

// Leemos los datos que envía el JavaScript del HTML
$datos = json_decode(file_get_contents('php://input'), true);

if ($datos) {
    $total = $datos['total'];
    $carrito = $datos['items'];

    // 1. Insertamos el pedido general
    $sqlPedido = "INSERT INTO pedidos (total) VALUES ('$total')";
    
    if (mysqli_query($conexion, $sqlPedido)) {
        $id_pedido = mysqli_insert_id($conexion); // Obtenemos el ID del pedido

        // 2. Insertamos cada platillo del carrito en el detalle
        foreach ($carrito as $item) {
            $nombre = $item['nombre'];
            $precio = $item['precio'];

            // Buscamos el ID del platillo por su nombre
            $res = mysqli_query($conexion, "SELECT id FROM platillos WHERE nombre = '$nombre' LIMIT 1");
            $platillo = mysqli_fetch_assoc($res);
            $id_platillo = $platillo['id'];

            $sqlDetalle = "INSERT INTO detalle_pedido (id_pedido, id_platillo, precio_unitario) 
                           VALUES ('$id_pedido', '$id_platillo', '$precio')";
            mysqli_query($conexion, $sqlDetalle);
        }
        echo json_encode(["status" => "success", "mensaje" => "¡Pedido guardado!"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
?>