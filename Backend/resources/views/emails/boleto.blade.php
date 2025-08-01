@component('mail::message')
# Compra Exitosa

Hola,

Tu boleto ha sido comprado con éxito. Aquí están los detalles:

- Número de boleto: {{ $boleto->id }}
- Viaje: {{ $boleto->id_viaje }}
- Asiento asignado: {{ $boleto->id_asiento }}
- Precio: ${{ number_format($boleto->precio, 2) }}
- Fecha de compra: {{ $boleto->fecha_compra }}

Gracias por confiar en nosotros.

Saludos,<br>
{{ config('app.name') }}
@endcomponent
