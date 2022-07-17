import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopingDomainModule } from '@requirements/developing/domain';
import { PersonificationComponent } from './personification.component';
import { DevelopingUiComponentsModule } from "@requirements/developing/ui-components";

@NgModule({
  imports: [ CommonModule, DevelopingDomainModule, DevelopingUiComponentsModule ],
  declarations: [PersonificationComponent],
  exports: [PersonificationComponent],
})
export class DevelopingFeaturePersonificationModule {}
