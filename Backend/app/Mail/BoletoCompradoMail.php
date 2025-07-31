<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Boleto;

class BoletoCompradoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $boleto;

public function __construct($boleto)
{
    $this->boleto = $boleto;
}

public function build()
{
    return $this->subject('Tu boleto de autobús')
        ->view('emails.boleto');
}
}
