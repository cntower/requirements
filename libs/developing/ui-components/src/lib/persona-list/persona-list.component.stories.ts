import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PersonaListComponent } from './persona-list.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { personaData } from "../persona/persona.component.stories";
import { PersonaComponent } from "../persona/persona.component";
import { ClickOnPinButtonInPersonasListEmitsPinEvent } from "./interactions/click-on-pin-button-in-personas-list-emits-pin-event";

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
    pinPerson: { action: true }
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
  },
  {
    ...personaData,
    id: 2,
    name: "Donald",
  },
  {
    ...personaData,
    id: 3,
    name: "Stan",
  }
];

export const PersonasPresentedAsList: Story<PersonaListComponent> = Template.bind({});
PersonasPresentedAsList.args = {
  ...PersonasPresentedAsList.args,
  personas,
};

export const PinnedPersonasDisplayAtTheTopOfTheList: Story<PersonaListComponent> = Template.bind({});
PinnedPersonasDisplayAtTheTopOfTheList.args = {
  ...PersonasPresentedAsList.args,
  personas: [ personas[0], personas[1], { ...personas[2], pinned: true, } ],
};

PersonasPresentedAsList.play = async ({ args, canvasElement }) => {
  await new ClickOnPinButtonInPersonasListEmitsPinEvent(args, canvasElement, personas).play();
};

