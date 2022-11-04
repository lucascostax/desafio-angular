import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { GeneroComponent } from './genero/genero.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component: HomeComponent},
{path:'header', component: HeaderComponent},
{path:'genero', component: GeneroComponent},
{path:'filmes', component: FilmesComponent},
{path:'usuario', component: UsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
