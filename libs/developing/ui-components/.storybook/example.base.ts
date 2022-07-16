import { Story } from "@storybook/angular";

export abstract class ExampleBase<TComponent> {
  protected canvasElement: HTMLElement;

  constructor(protected givenStory: Story<TComponent>, protected args: Partial<TComponent>) {
    this.setup();
    this.handlePlayFunction();
  }

  abstract setup(): void;

  abstract interaction(): Promise<void>;

  protected handlePlayFunction() {
    const play = this.givenStory.play?.bind({});
    this.givenStory.play = async ({ args, canvasElement }) => {
      this.args = args;
      this.canvasElement = canvasElement;
      if (play) {
        await play({ args, canvasElement });
      }
      await this.interaction();
    }
  }
}
