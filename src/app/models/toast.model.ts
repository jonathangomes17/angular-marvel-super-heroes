import { UuidLib } from "../libs/uuid.lib";

export class ToastModel {
  /**
   * Id
   * @param id
   */
  #id: string;

  /**
   * Text
   * @param text
   */
  #text: string;

  /**
   * Time life
   * @param timeLife
   */
  #timeLife: number;

  constructor({ text = '', timeLife = 1000 }) {
    this.#id = UuidLib.generateV4();
    this.#text = text;
    this.#timeLife = timeLife;
  }

  /**
   * Identity toast message
   * @returns string
   */
  get id(): string {
    return this.#id;
  }

  /**
   * Get an text for notification
   * @returns string
   */
  get text(): string {
    return this.#text;
  }

  /**
   * Get time life notification
   * @returns number
   */
  get timeLife(): number {
    return this.#timeLife;
  }
}
