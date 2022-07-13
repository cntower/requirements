import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonaComponent } from './persona.component';
import { Persona } from "../../../../domain/src";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

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
} as Meta<PersonaComponent>;

const Template: Story<PersonaComponent> = (args: PersonaComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  persona: {
    id: 1,
    name: 'Isabel',
    description: 'Frontend Developer, 26',
    profileUrl: 'https://uxpressia.com/blog/how-to-create-persona-guide-examples',
  } as Persona,
};
