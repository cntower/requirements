import { PersonaListComponent } from "../persona-list.component";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

// PinnedPersonasDisplayAtTheTopOfTheList
export class PinnedPersonasDisplayAtTheTopOfTheList {

  constructor(private args: PersonaListComponent, private canvasElement: HTMLElement) {
  }

  async play() {
    await this.thenThePinnedPersonaDisplaysAtTheTopOfTheList();
  }

  async thenThePinnedPersonaDisplaysAtTheTopOfTheList() {
    const canvas = within(this.canvasElement);
    await expect(canvas.getAllByTestId('pin-button')[0]).toHaveAttribute('aria-label', 'Pin button (pinned:true)')
  }

}

export class PinnedPersonasDisplayAtTheTopOfTheList2 extends ExampleBase<PersonaListComponent> {

  setup() {
    this.givenPersonaArrayAndTheLastPersonaIsPinned();
  }

  async interaction() {
    await this.thenThePinnedPersonaDisplaysAtTheTopOfTheList();
  }

  givenPersonaArrayAndTheLastPersonaIsPinned() {
    this.givenStory.args = this.args;
  }

  async thenThePinnedPersonaDisplaysAtTheTopOfTheList() {
    const canvas = within(this.canvasElement);
    await expect(canvas.getAllByTestId('pin-button')[0]).toHaveAttribute('aria-label', 'Pin button (pinned:true)')
  }

}
