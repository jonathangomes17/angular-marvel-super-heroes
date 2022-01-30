import { ISerialize } from 'src/app/interfaces/serialize.interface'
import { CharacterCoverModel } from './character-cover.model'

export class CharacterModel implements ISerialize {
  #id: number;
  #name: string;
  #description: string;
  #cover: CharacterCoverModel;
  #totalComics: number;
  #totalEvents: number;
  #totalSeries: number;
  #totalStories: number;

  //@ts-ignore
  constructor({ id = 0, name = '', description = '', thumbnail = {}, comics = {}, events = {}, series = {}, stories = {} }) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#cover = new CharacterCoverModel(thumbnail);

    //@ts-ignore
    this.#totalComics = comics?.available;
    //@ts-ignore
    this.#totalEvents = events?.available;
    //@ts-ignore
    this.#totalSeries = series?.available;
    //@ts-ignore
    this.#totalStories = stories?.available;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get description(): string {
    return this.#description;
  }

  get cover(): CharacterCoverModel {
    return this.#cover;
  }

  get totalComics(): number {
    return this.#totalComics;
  }

  get totalEvents(): number {
    return this.#totalEvents;
  }

  get totalSeries(): number {
    return this.#totalSeries;
  }

  get totalStories(): number {
    return this.#totalStories;
  }

  get slugUrl(): string {
    let name = 'noname';

    try {
      name = this.#name
        .toLowerCase()
        .trim()
        .replace(' ', '-')
        .replace(' ', '-')
        .replace(' ', '-')
        .replace('(', '')
        .replace(')', '');
    } catch (e) {
      console.error('do not mount url character', this.#name);
    }

    return `search/${name}-${this.id}/detail`
  }

  serialize(): object {
    return {}
  }
}
