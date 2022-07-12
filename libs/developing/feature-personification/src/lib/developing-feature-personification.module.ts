import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopingDomainModule } from '@requirements/developing/domain';
import { PersonificationComponent } from './personification.component';

@NgModule({
  imports: [CommonModule, DevelopingDomainModule],
  declarations: [PersonificationComponent],
  exports: [PersonificationComponent],
})
export class DevelopingFeaturePersonificationModule {}
