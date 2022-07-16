import { PersonaListComponent } from "../persona-list.component";
import { Persona } from "@requirements/developing/domain";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

// click on pin button in personas list emits pin event
export class ClickOnPinButtonInPersonasListEmitsPinEvent {

  constructor(private args: PersonaListComponent, private canvasElement: HTMLElement, private personas: Persona[]) {
  }

  async play() {
    await this.givenUnPinnedList();
    await this.whenTheUserClicksPinButton();
    await this.thenTheComponentEmitsPinEvent();
  }

  private async givenUnPinnedList() {
    this.args.personas = this.personas;
  }

  private async whenTheUserClicksPinButton() {
    const canvas = within(this.canvasElement);
    return userEvent.click(canvas.getAllByTestId('pin-button')[0]);
  }

  private async thenTheComponentEmitsPinEvent() {
    console.log(this.args)
    return await waitFor(() => expect(this.args.pinPerson).toHaveBeenCalled());
  }

}

export class ClickOnPinButtonInPersonasListEmitsPinEvent2 extends ExampleBase<PersonaListComponent> {

  setup() {
    this.givenUnPinnedList();
  }

  async interaction() {
    await this.whenTheUserClicksPinButton();
    await this.thenTheComponentEmitsPinEvent();
  }

  private givenUnPinnedList() {
    this.givenStory.args = this.args;
  }

  private async whenTheUserClicksPinButton() {
    const canvas = within(this.canvasElement);
    return userEvent.click(canvas.getAllByTestId('pin-button')[0]);
  }

  private async thenTheComponentEmitsPinEvent() {
    return await waitFor(() => expect(this.args.pinPerson).toHaveBeenCalled());
  }

}
