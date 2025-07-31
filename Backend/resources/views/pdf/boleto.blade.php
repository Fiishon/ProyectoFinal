<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Boleto</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .box { border: 1px solid black; padding: 20px; margin: 20px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Boleto de Autobús</h2>
        <p><strong>Pasajero:</strong> {{ $boleto->usuario->name }}</p>
        <p><strong>Correo:</strong> {{ $boleto->usuario->email }}</p>
        <p><strong>Destino:</strong> {{ $boleto->viaje->destino }}</p>
        <p><strong>Fecha de viaje:</strong> {{ $boleto->viaje->fecha }}</p>
        <p><strong>Asiento:</strong> {{ $boleto->asiento->numero }}</p>
        <p><strong>Precio:</strong> ${{ $boleto->precio }}</p>
        <p><strong>Fecha de compra:</strong> {{ $boleto->fecha_compra }}</p>
        <p><strong>Estado:</strong> {{ $boleto->estado_texto }}</p>
    </div>
</body>
</html>
