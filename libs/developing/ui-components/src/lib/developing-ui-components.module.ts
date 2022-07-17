import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PersonaListComponent } from './persona-list/persona-list.component';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule ],
  declarations: [ PersonaComponent, PersonaListComponent ],
  exports: [
    PersonaComponent,
    PersonaListComponent
  ]
})
export class DevelopingUiComponentsModule {
}
