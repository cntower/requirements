import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonificationComponent } from './personification.component';
import { Persona, PersonificationFacade } from "../../../domain/src";
import * as jest from 'jest-mock';
import { BehaviorSubject, of } from "rxjs";
import { DevelopingUiComponentsModule } from "../../../ui-components/src";
import { personaData } from "../../../ui-components/src/lib/persona/persona.component.stories";

class MockPersonificationFacade implements Omit<PersonificationFacade, "store"> {

  private _personaListSubject$ = new BehaviorSubject<Persona[]>([
    {
      "id": 1,
      "name": "Lorem ipsum",
      "description": "Lorem ipsum dolor sit amet",
      "profileUrl": ""
    },
    {
      "id": 2,
      "name": "At vero eos",
      "description": "At vero eos et accusam et justo duo dolores",
      "profileUrl": ""
    },
    {
      "id": 3,
      "name": "Duis autem",
      "description": "Duis autem vel eum iriure dolor in hendrerit",
      "profileUrl": ""
    }
  ]);

  personaList$ = this._personaListSubject$.asObservable();

  loaded$ = of(true);

  selectedPersona$ = of(personaData);

  load = jest.fn();

  // @ts-ignore
  pinPerson = jest.fn((id: number) => {
    console.log(this._personaListSubject$.value);
    this._personaListSubject$.next(this._personaListSubject$.value.map((persona) => ({
      ...persona,
      pinned: (persona.id === id) ? !persona.pinned : persona.pinned
    })));
  });
}

export default {
  title: 'PersonificationComponent',
  component: PersonificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DevelopingUiComponentsModule,
      ],
      providers: [
        { provide: PersonificationFacade, useClass: MockPersonificationFacade }
      ]
    }),
  ],
} as Meta<PersonificationComponent>;

const Template: Story<PersonificationComponent> = (
  args: PersonificationComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
