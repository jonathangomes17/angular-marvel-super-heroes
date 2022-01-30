import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CharacterModel } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailPageComponent implements AfterViewInit {

  character = new CharacterModel({});

  constructor(
    private marvelService: MarvelService,
    private characterService: CharacterService,
    private title: Title,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
    this.character = this.characterService.getCharacterViewing();

    if (this.character.id > 0) {
      this.title.setTitle(`${this.character.name} | Marvel super heroes app your character finder`);
      return;
    }

    this.route.params.subscribe(params => {
      const characterId = params['slugId'].match(/\d+/g)?.[0];
      this.getCharacterById(characterId);
    });
  }

  getCharacterById(characterId: number): void {
    this.marvelService.getCharactersById(characterId).subscribe((response) => {
      this.character = response;
      this.title.setTitle(`${this.character.name} | Marvel super heroes app your character finder`);
    });
  }
}
