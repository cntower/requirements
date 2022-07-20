 import { PersonaComponent } from "../persona.component";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ExampleBase } from "../../../../.storybook/example.base";

//  persona contains name, link to its profile and short description
export class PersonaContainsNameLinkToItsProfileAndShortDescription extends ExampleBase<PersonaComponent> {

  async play() {
    const canvas = within(this.canvasElement);

    await expect(this.canvasElement.innerText).toContain(this.args.persona!.name);

    await expect(this.canvasElement.innerText).toContain(this.args.persona!.description);

    // @ts-ignore TS2339: Property 'toHaveAttribute' does not exist on type 'JestMatchers '.
    await expect(canvas.getByTestId('profile-url')).toHaveAttribute('href', this.args.persona!.profileUrl);
  }

}
