import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Persona } from "@requirements/developing/domain";

@Component({
  selector: 'components-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: [ './persona-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonaListComponent {

  personasInOrder: Persona[] = [];

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  pinPerson = new EventEmitter<number>();

  @Input()
  set personas(personas: Persona[]) {
    this.personasInOrder = [
      ...personas.filter(persona => persona.pinned),
      ...personas.filter(persona => !persona.pinned),
    ];
  }

  onPin(id: number) {
    this.pinPerson.emit(id);
  }

}
