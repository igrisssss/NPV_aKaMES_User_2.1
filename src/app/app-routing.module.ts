import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';
import { MasterDataComponent } from './main/pages/home/master-data/master-data.component';
import { UserAddNewComponent } from './main/pages/home/master-data/user/user-add-new/user-add-new.component';
import { UserEditComponent } from './main/pages/home/master-data/user/user-edit/user-edit.component';
import { UserComponent } from './main/pages/home/master-data/user/user.component';

const routes: Routes = 
[
  {
    path:'',
    redirectTo: 'home/master-data/user',
    pathMatch: 'full',
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'home/master-data',
    component: MasterDataComponent,
  },
  {
    path:'home/master-data/user',
    component: UserComponent,
  },
  {
    path:'home/master-data/user/add-new',
    component: UserAddNewComponent,
  },
  {
    path:'home/master-data/user/edit/:id',
    component: UserEditComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
