// click on pin button in personas list emits pin event
import { PersonaListComponent } from "./persona-list.component";
import { Persona } from "@requirements/developing/domain";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
    return await waitFor(() => expect(this.args.pinPerson).toHaveBeenCalled());
  }

}
