import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PersonificationComponent } from './personification.component';

export default {
  title: 'PersonificationComponent',
  component: PersonificationComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
