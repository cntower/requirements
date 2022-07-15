import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PersonaComponent } from './persona.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ClickOnPinButtonEmitsPinEvent } from "./interactions/click-on-pin-button-emits-pin-event";
import { personaShouldContainNameLinkToItsProfileAndShortDescription } from "./interactions/persona-should-contain-name-link-to-its-profile-and-short-description";

export default {
  title: 'PersonaComponent',
  component: PersonaComponent,
  decorators: [
    moduleMetadata({
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
} as Meta<PersonaComponent>;

const Template: Story<PersonaComponent> = (args: PersonaComponent) => ({
  props: {
    ...args
  }
});

export const personaData: Persona = {
  id: 1,
  name: 'Isabel',
  description: 'Frontend Developer, 26',
  profileUrl: 'https://uxpressia.com/blog/how-to-create-persona-guide-examples',
  pinned: false,
}

export const Default: Story<PersonaComponent> = Template.bind({});
Default.args = {
  ...Default.args,
  persona: personaData,
};

export const Pinned = Template.bind({});
Pinned.args = {
  persona: {
    ...Default.args['persona'],
    pinned: true
  } as Persona,
};

Default.play = async ({ args, canvasElement }) => {
  await new personaShouldContainNameLinkToItsProfileAndShortDescription(args, canvasElement, personaData).play();
  await new ClickOnPinButtonEmitsPinEvent(args, canvasElement).play();
};

