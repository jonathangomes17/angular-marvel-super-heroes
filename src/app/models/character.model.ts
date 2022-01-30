import { ISerialize } from 'src/app/interfaces/serialize.interface'
import { CharacterCoverModel } from './character-cover.model'

export class CharacterModel implements ISerialize {
  #id: number
  #name: string
  #cover: CharacterCoverModel
  #totalComics: number
  #totalEvents: number
  #totalSeries: number
  #totalStories: number

  //@ts-ignore
  constructor({ id, name, thumbnail, comics, events, series, stories }) {
    this.#id = id;
    this.#name = name;
    this.#cover = new CharacterCoverModel(thumbnail);
    this.#totalComics = comics?.returned;
    this.#totalEvents = events?.returned;
    this.#totalSeries = series?.returned;
    this.#totalStories = stories?.returned;
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
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

  serialize(): object {
    return {}
  }
}
