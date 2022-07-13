import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from "@requirements/developing/domain";

@Component({
  selector: 'components-persona',
  templateUrl: './persona.component.html',
  styleUrls: [ './persona.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent {

  @Input() persona: Persona;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  pin = new EventEmitter<number>();

  onPin() {
    this.pin.emit(this.persona.id);
  }

}
