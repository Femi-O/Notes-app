import { IntegrationsPageComponent } from './pages/integrations-page/integrations-page.component';
import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { Testing2Component } from './pages/testing2/testing2.component';
import { EditPageComponent } from 'src/app/pages/testing-page/edit-page/edit-page.component';
import { ViewDetailPageComponent } from 'src/app/pages/testing-page/view-detail-page/view-detail-page.component';
import { CreateNewComponent } from './pages/testing-page/create-new/create-new.component';
import { FiltersPageComponent } from 'src/app/pages/filters-page/filters-page.component';
import { RoutingPageComponent } from 'src/app/pages/routing-page/routing-page.component';
import { FormDuplicationPageComponent } from 'src/app/pages/form-duplication-page/form-duplication-page.component';
import { CdnPageComponent } from 'src/app/pages/cdn-page/cdn-page.component';
import { ComplexityPageComponent } from 'src/app/pages/complexity-page/complexity-page.component';
import { CommonIssuesPageComponent } from './pages/common-issues-page/common-issues-page.component';
import { RxjsPageComponent } from './pages/rxjs-page/rxjs-page.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { OtherNotesComponent } from './pages/other-notes/other-notes.component';


const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: PagesComponent},
  {path: 'pages/testing', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: TestingPageComponent},
  {path: 'pages/integrations', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: IntegrationsPageComponent},
  {path: 'pages/testing2', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: Testing2Component},
  { path: 'pages/testing/:id/edit-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: EditPageComponent },
  { path: 'pages/testing/:id/view-detail-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: ViewDetailPageComponent },
  { path: 'pages/testing/create-new', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: CreateNewComponent },
  { path: 'pages/filters-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: FiltersPageComponent },
  { path: 'pages/routing-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: RoutingPageComponent },
  { path: 'pages/form-duplication-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: FormDuplicationPageComponent },
  { path: 'pages/cdn-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: CdnPageComponent },
  { path: 'pages/complexity-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: ComplexityPageComponent },
  { path: 'pages/common-issues-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: CommonIssuesPageComponent },
  { path: 'pages/rxjs-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: RxjsPageComponent },
  { path: 'pages/exercise-page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: ExercisesComponent },
  { path: 'pages/glad-notes', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), component: OtherNotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      // scrollOffset: [0, 50],
      relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
