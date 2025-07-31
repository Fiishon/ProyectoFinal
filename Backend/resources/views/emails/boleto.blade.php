@component('mail::message')
# ¡Gracias por tu compra, {{ $boleto->usuario->name }}!

Tu boleto fue generado con éxito.

- **Destino:** {{ $boleto->viaje->destino }}
- **Fecha del viaje:** {{ $boleto->viaje->fecha }}
- **Asiento:** {{ $boleto->asiento->numero }}
- **Precio:** ${{ $boleto->precio }}
- **Estado:** {{ $boleto->estado_texto }}

Tu boleto en PDF está adjunto.

@endcomponent
