import { PersonaComponent } from "../persona.component";
import { Persona } from "@requirements/developing/domain";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

//  persona contains name, link to its profile and short description
export class PersonaContainsNameLinkToItsProfileAndShortDescription {

  constructor(private args: PersonaComponent, private canvasElement: HTMLElement, private personaData: Persona) {
  }

  async play() {
    const canvas = within(this.canvasElement);
    await expect(this.canvasElement.innerText).toContain(this.personaData.name);
    await expect(this.canvasElement.innerText).toContain(this.personaData.description);
    await expect(canvas.getByTestId('profile-url')).toHaveAttribute('href', this.personaData.profileUrl);
  }

}
