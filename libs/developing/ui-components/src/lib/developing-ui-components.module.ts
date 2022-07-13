import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule ],
  declarations: [
    PersonaComponent
  ],
})
export class DevelopingUiComponentsModule {}
