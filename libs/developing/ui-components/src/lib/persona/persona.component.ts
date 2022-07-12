import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Persona } from "@requirements/developing/domain";

@Component({
  selector: 'components-persona',
  templateUrl: './persona.component.html',
  styleUrls: [ './persona.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonaComponent {

  @Input() persona: Persona;

}
