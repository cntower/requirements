import { Story } from "@storybook/angular";
import { Playable } from "./playable";

type Constructable<T = any> = new (...args: any[]) => T;

interface CreateStoryArgsBase<TComponent> {
  Template: Story<TComponent>,
  args?: Partial<TComponent>,
}

interface CreateStoryArgsWithPlay<TComponent> extends CreateStoryArgsBase<TComponent> {
  play?: ({ args, canvasElement }: { args: TComponent, canvasElement: HTMLElement }) => void
}

interface CreateStoryArgsWithExamples0<TComponent> extends CreateStoryArgsBase<TComponent> {
  examples?: Constructable<Playable>[]
}

interface CreateStoryArgsWithExamples<TComponent> extends CreateStoryArgsBase<TComponent> {
  examples?: Constructable[]
}

export function createStory0<TComponent>(
  _args: CreateStoryArgsWithPlay<TComponent> | CreateStoryArgsWithExamples0<TComponent>
): Story<TComponent> {
  const template: Story<TComponent> = _args.Template.bind({});
  template.args = _args.args;
  console.log('createStory0', template.args);
  const play = (<CreateStoryArgsWithPlay<TComponent>>_args).play;
  if (play) {
    template.play = play;
  }
  const examples = (<CreateStoryArgsWithExamples0<TComponent>>_args).examples;
  if (examples) {
    template.play = async ({ args, canvasElement }) => {
      //todo: explore why args lost template.args here?
      for await (const example of examples) {
        await new example({...args, ...template.args}, canvasElement).play()
      }
    }
  }
  return template;
}

export function createStory<TComponent>(
  _args: CreateStoryArgsWithPlay<TComponent> | CreateStoryArgsWithExamples<TComponent>
): Story<TComponent> {
  const template: Story<TComponent> = _args.Template.bind({});
  template.args = _args.args;
  const play = (<CreateStoryArgsWithPlay<TComponent>>_args).play;
  if (play) {
    template.play = play;
  }
  const examples = (<CreateStoryArgsWithExamples<TComponent>>_args).examples;
  if (examples) {
    examples.forEach(example => new example(template, _args.args))
  }
  return template;
}
