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
    this.marvelService.getCharacters('Spider').subscribe((response: any) => {
      this.charactersResult = response;
      this.cdref.detectChanges();
    });
  }

  loadMore(): void {
  }
}
