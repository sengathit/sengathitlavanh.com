import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { CvComponent } from './cv/cv.component';
import { SaymynameComponent } from './saymyname/saymyname.component';

const appRoutes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'bio', component: BioComponent },
	{ path: 'cv', component: CvComponent },
	{ path: 'saymyname', component: SaymynameComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}