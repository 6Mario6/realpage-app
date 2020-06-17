import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../router/router';




@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
