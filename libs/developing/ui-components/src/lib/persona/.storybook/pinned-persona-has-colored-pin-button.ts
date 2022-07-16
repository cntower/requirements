import { PersonaComponent } from "../persona.component";
import { Persona } from "@requirements/developing/domain";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export class PinnedPersonaHasColoredPinButton {

  constructor(private args: PersonaComponent, private canvasElement: HTMLElement, private personaData: Persona) {
  }

  async play() {
    await this.thenTheComponentHasColoredPinButton();
  }

  async thenTheComponentHasColoredPinButton() {
    const canvas = within(this.canvasElement);
    await expect(canvas.getByTestId('pin-button')).toHaveAttribute('ng-reflect-color', 'primary');
  }

}
