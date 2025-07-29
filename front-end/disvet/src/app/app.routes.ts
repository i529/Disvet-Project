import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(h => h.HomeComponent)
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: 'dicas',
        loadComponent: () => import('./components/dicas/dicas.component').then(d => d.DicasComponent)
    },
];
