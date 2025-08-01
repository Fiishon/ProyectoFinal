<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BoletoComprado extends Mailable
{
    use Queueable, SerializesModels;

    public $boleto;

    public function __construct($boleto)
    {
        $this->boleto = $boleto;
    }

    public function build()
    {
        return $this->subject('Tu boleto ha sido comprado con éxito')
                    ->markdown('emails.boleto.comprado');
    }
}
