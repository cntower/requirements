import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonaComponent } from './persona.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
  await personaShouldContainNameLinkToItsProfileAndShortDescription(canvasElement);
  await clickOnPinButtonEmitPinEvent(args, canvasElement);
};

//  Example: persona should contain name, link to its profile and short description
async function personaShouldContainNameLinkToItsProfileAndShortDescription(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await expect(canvasElement.innerText).toContain(personaData.name);
  await expect(canvasElement.innerText).toContain(personaData.description);
  await expect(canvas.getByTestId('profile-url')).toHaveAttribute('href', personaData.profileUrl);
}

//  Example: click on pin button emit pin event
async function clickOnPinButtonEmitPinEvent(args: PersonaComponent, canvasElement: HTMLElement) {
  await whenTheUserClicksPinButton(canvasElement);
  await thenItEmitPinEvent(args);
}

async function whenTheUserClicksPinButton(canvasElement: HTMLElement): Promise<any> {
  const canvas = within(canvasElement);
  return userEvent.click(canvas.getByTestId('pin-button'));
}

async function thenItEmitPinEvent(args: PersonaComponent): Promise<void> {
  return await waitFor(() => expect(args.pin).toHaveBeenCalled());
}
