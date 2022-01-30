import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CharacterResultModel } from 'src/app/models/character-result.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements AfterViewInit {

  charactersResult: CharacterResultModel;

  constructor(private characterService: CharacterService, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.characterService
      .getCharacterResult()
      .subscribe((characterResult: CharacterResultModel) => {
        this.charactersResult = characterResult;
        this.cdref.detectChanges();
    })
  }

  loadMore(): void {
  }
}
