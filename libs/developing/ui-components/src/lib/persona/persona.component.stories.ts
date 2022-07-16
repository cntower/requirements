import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PersonaComponent } from './persona.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PersonaContainsNameLinkToItsProfileAndShortDescription } from "./.storybook/persona-contains-name-link-to-its-profile-and-short-description";
import { PinnedPersonaHasColoredPinButton } from "./.storybook/pinned-persona-has-colored-pin-button";
import { createStory } from "../../../.storybook/create-story";
import { ClickOnPinButtonEmitsPinEvent } from "./.storybook/click-on-pin-button-emits-pin-event";

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

export const DefaultPersona = createStory<PersonaComponent>({
  Template, args: { persona: personaData },
  play: async ({ args, canvasElement }) => {
    await new PersonaContainsNameLinkToItsProfileAndShortDescription(args, canvasElement, personaData).play();
    await new ClickOnPinButtonEmitsPinEvent(args, canvasElement).play();
  }
});

export const PinnedPersona = createStory<PersonaComponent>({
  Template,
  args: {
    persona: {
      ...personaData,
      pinned: true,
    }
  },
  play: async ({ args, canvasElement }) => {
    await new PinnedPersonaHasColoredPinButton(args, canvasElement, personaData).play();
  }
});
