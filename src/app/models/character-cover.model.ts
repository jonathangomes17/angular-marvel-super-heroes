import { ISerialize } from 'src/app/interfaces/serialize.interface';

export class CharacterCoverModel implements ISerialize {
  #cover: string;

  constructor({ path = '', extension = '' }) {
    this.#cover = `${path}.${extension}`;
  }

  get cover(): string {
    return this.#cover;
  }

  serialize(): object {
    return {
    }
  }
}
