import { PersonaComponent } from "../persona.component";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

export class PinnedPersonaHasColoredPinButton extends ExampleBase<PersonaComponent> {

  async play() {
    await this.thenTheComponentHasColoredPinButton();
  }

  async thenTheComponentHasColoredPinButton() {
    const canvas = within(this.canvasElement);
    await expect(canvas.getByTestId('pin-button')).toHaveAttribute('ng-reflect-color', 'primary');
  }

}
