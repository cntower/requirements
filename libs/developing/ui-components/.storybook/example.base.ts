import { Playable } from "./playable";

export abstract class ExampleBase<TComponent> implements Playable {

  constructor(protected args: Partial<TComponent>, protected canvasElement: HTMLElement) {
  }

  abstract play(): Promise<void>;

}
