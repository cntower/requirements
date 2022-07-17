import { PersonaListComponent } from "../persona-list.component";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

// click on pin button in personas list emits pin event
export class ClickOnPinButtonInPersonasListEmitsPinEvent extends ExampleBase<PersonaListComponent>{

  async play() {
    await this.whenTheUserClicksPinButton();
    await this.thenTheComponentEmitsPinEvent();
  }

  private async whenTheUserClicksPinButton() {
    const canvas = within(this.canvasElement);
    return userEvent.click(canvas.getAllByTestId('pin-button')[0]);
  }

  private async thenTheComponentEmitsPinEvent() {
    return await waitFor(() => expect(this.args.pinPerson).toHaveBeenCalled());
  }

}
