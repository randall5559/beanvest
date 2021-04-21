import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteModule } from './site/site.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => SiteModule
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
