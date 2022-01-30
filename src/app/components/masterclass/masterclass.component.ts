import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageLib } from 'src/app/libs/localStorage.lib';
import { CharacterService } from 'src/app/services/character.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-masterclass',
  templateUrl: './masterclass.component.html',
  styleUrls: ['./masterclass.component.scss']
})
export class MasterClassComponent {

  globalSearch: string;

  timer$: any;

  constructor(
    private marvelService: MarvelService,
    private characterService: CharacterService,
    private localStorageLib: LocalStorageLib,
    private router: Router
  ) { }

  handleSearch(nameStartsWith: string) {
    if (this.timer$) {
      clearTimeout(this.timer$);
    }

    if (!nameStartsWith) {
      return;
    }

    // workaround
    this.timer$ = setTimeout(() => this.getCharacters(nameStartsWith), 1000)
  }

  getCharacters(nameStartsWith: string) {
    this.marvelService
      .getCharacters(nameStartsWith)
      .subscribe((response: any) => this.characterService.setCharacterResult(response));
  }

  handleLogoff() {
    this.localStorageLib.removeStorage('user');
    this.router.navigateByUrl('/login');
  }
}
