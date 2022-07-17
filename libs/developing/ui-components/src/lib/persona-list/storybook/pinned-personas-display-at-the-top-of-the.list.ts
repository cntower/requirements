import { PersonaListComponent } from "../persona-list.component";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

// PinnedPersonasDisplayAtTheTopOfTheList
export class PinnedPersonasDisplayAtTheTopOfTheList extends ExampleBase<PersonaListComponent>{

  async play() {
    await this.thenThePinnedPersonaDisplaysAtTheTopOfTheList();
  }

  async thenThePinnedPersonaDisplaysAtTheTopOfTheList() {
    const canvas = within(this.canvasElement);
    await expect(canvas.getAllByTestId('pin-button')[0]).toHaveAttribute('aria-label', 'Pin button (pinned:true)')
  }

}
