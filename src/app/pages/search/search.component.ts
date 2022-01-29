import { AfterViewInit, Component } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPageComponent implements AfterViewInit {

  constructor(private marvelService: MarvelService) { }

  ngAfterViewInit(): void {
  }
}
