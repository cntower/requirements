import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonificationComponent } from './personification.component';
import { PersonificationFacade } from "../../../domain/src";
import * as jest from 'jest-mock';
import { of } from "rxjs";
import { DevelopingUiComponentsModule } from "../../../ui-components/src";

const mockPersonificationFacade/*: PersonificationFacade*/ = {
  personaList$: of([
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
  ]),
  loaded$: of(true),
  selectedPersona$: null,
  load: jest.fn(),
  store: null
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
        { provide: PersonificationFacade, useValue: mockPersonificationFacade }
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
