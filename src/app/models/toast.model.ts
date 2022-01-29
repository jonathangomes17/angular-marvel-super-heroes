export class ToastModel {
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

  /**
   * Position notification
   */
  #position: 'top' | 'bottom' | 'left' | 'right';

  constructor({ text = '', timeLife = 300 }) {
    this.#text = text;
    this.#timeLife = timeLife;
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

  /**
   * Position show window
   * @returns string
   */
  get position(): string {
    return this.#position;
  }
}
