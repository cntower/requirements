import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonaListComponent } from './persona-list.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { personaData } from "../persona/persona.component.stories";
import { PersonaComponent } from "../persona/persona.component";

export default {
  title: 'PersonaListComponent',
  component: PersonaListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ PersonaListComponent, PersonaComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
      ],
    }),
  ],
  argTypes: {
    pin: { action: true }
  },
  excludeStories: /.*Data$/,
} as Meta<PersonaListComponent>;

const Template: Story<PersonaListComponent> = (args: PersonaListComponent) => ({
  props: {
    ...args
  }
});

const personas: Persona[] = [
  {
    ...personaData,
    id: 1,
    name: "John",
    pinned: false
  },
  {
    ...personaData,
    id: 2,
    name: "Donald",
    pinned: false
  },
  {
    ...personaData,
    id: 3,
    name: "Stan",
    pinned: false
  }
];

export const Default: Story<PersonaListComponent> = Template.bind({});
Default.args = {
  ...Default.args,
  personas,
};
