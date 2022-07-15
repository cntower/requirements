import { PersonaComponent } from "../persona.component";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

//  click on pin button emits pin event
export class ClickOnPinButtonEmitsPinEvent {

  constructor(private args: PersonaComponent, private canvasElement: HTMLElement) {
  }

  async play() {
    await this.whenTheUserClicksPinButton();
    await this.thenTheComponentEmitsPinEvent();
  }

  async whenTheUserClicksPinButton() {
    const canvas = within(this.canvasElement);
    return userEvent.click(canvas.getByTestId('pin-button'));
  }

  async thenTheComponentEmitsPinEvent() {
    return await waitFor(() => expect(this.args.pin).toHaveBeenCalled());
  }

}
