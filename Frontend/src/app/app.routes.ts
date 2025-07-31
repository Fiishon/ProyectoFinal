import { Routes } from '@angular/router';
import { AdminUsuarios } from './admin-usuarios/admin-usuarios';
import { App } from './app';
import { CPromociones } from './cpromociones/cpromociones';
import { CNosotros } from './cnosotros/cnosotros';
import { CViajes } from './cviajes/cviajes';
import { AdminViajes } from './admin-viajes/admin-viajes';
import { CGaleria } from './cgaleria/cgaleria';
import { ComprarBoletosComponent } from './comprar-boleto/comprar-boleto';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'admin-usuarios', component: AdminUsuarios },
    { path: 'promociones', component: CPromociones},
    { path: 'nosotros', component: CNosotros},
    { path: 'viajes', component: CViajes},
    { path: 'admin-viajes', component: AdminViajes},
    { path: 'galeria', component: CGaleria},
    { path: 'comprar', component: ComprarBoletosComponent},
    { path: '**', redirectTo: '' } 


];
