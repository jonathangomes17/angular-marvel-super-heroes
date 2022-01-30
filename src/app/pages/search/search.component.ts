import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CharacterResultModel } from 'src/app/models/character-result.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements AfterViewInit {

  charactersResult: CharacterResultModel;

  constructor(private marvelService: MarvelService, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.marvelService.getCharacters('Spider Man').subscribe((response: any) => {
      this.charactersResult = new CharacterResultModel({
        total: response?.total,
        count: response?.count,
        offset: response?.offset,
        characters: response?.data?.results
      });

      this.cdref.detectChanges();
    });
  }
}
