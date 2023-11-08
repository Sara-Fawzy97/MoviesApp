import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMoviesRoutingModule } from './top-movies-routing.module';
import { TopRatedMoviesComponent } from '../top-rated-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SharedModModule } from 'src/app/shared/layouts/shared-mod/shared-mod.module';
import { SearchedModuleModule } from '../../searched-items/searched-module/searched-module.module';


@NgModule({
  declarations: [TopRatedMoviesComponent],
  imports: [
    CommonModule,
    TopMoviesRoutingModule,
    SharedModModule,
    NgxPaginationModule,
    SearchedModuleModule
  ]
})
export class TopMoviesModule { }
