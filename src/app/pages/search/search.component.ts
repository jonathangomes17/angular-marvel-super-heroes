import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CharacterResultModel } from 'src/app/models/character-result.model';
import { CharacterModel } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements AfterViewInit {

  charactersResult: CharacterResultModel = new CharacterResultModel({});

  constructor(
    private characterService: CharacterService,
    private cdref: ChangeDetectorRef,
    private router: Router,
    private title: Title,
  ) { }

  ngAfterViewInit(): void {
    this.title.setTitle('Search | Marvel super heroes app your character finder');

    this.characterService
      .getCharacterResult()
      .subscribe((characterResult: CharacterResultModel) => {
        this.charactersResult = characterResult;
        this.cdref.detectChanges();
    })
  }

  loadMore(): void {
    // TODO:
  }

  handleDetail(character: CharacterModel): void {
    this.characterService.setCharacterViewing(character);
    this.router.navigateByUrl(character.slugUrl);
  }
}
