import {RouterModule, Routes} from "@angular/router";
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {JqueryComponent} from "./jquery/jquery.component";
import {AngularComponent} from "./angular/angular.component";
import {HttpComponent} from "./http/http.component";
import {IndexComponent} from "./index.component";

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
    { path: 'home', component: HomeComponent},
    {path: 'bootstrap', component: BootstrapComponent},
    {path: 'jquery', component: JqueryComponent},
    {path: 'angular', component: AngularComponent},
    {path: 'http', component: HttpComponent},
  ]},

  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
