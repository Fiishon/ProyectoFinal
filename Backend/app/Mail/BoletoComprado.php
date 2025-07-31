<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Boleto;

class BoletoComprado extends Mailable
{
    use Queueable, SerializesModels;

    public $boleto;

    public function __construct(Boleto $boleto)
    {
        $this->boleto = $boleto;
    }

    public function build()
    {
        return $this->subject('Tu boleto ha sido comprado')
                    ->markdown('emails.boleto');
    }
}
