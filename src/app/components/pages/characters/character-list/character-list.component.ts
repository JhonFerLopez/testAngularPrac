import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';
import { take } from 'rxjs/operators';

type RequestInfo={
  next: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info: RequestInfo = {
    next: '',
  };
  private pageNum: number = 1;
  private query: string = '';

  constructor(
    private characterSvc: CharacterService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    //this.getDataFromService();
    this.characterSvc.textObservable$.subscribe(text => {
      this.query = text;
      this.getCharactersByQuery();
    })
  }

  private getDataFromService ():void {
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe( (res: any) => {
      if(res?.results?.length) {
        //console.log('response-> ',res);
        const { info, results } = res;
        this.characters = [ ... this.characters, ... results ];
        this.info = info;
      } else {
        this.characters = [];
      }      
    })
  }

  private getCharactersByQuery():void {
    this.characters = [];
    this.route.queryParams.pipe(
      take(1)
    ).subscribe( (params) => {
      this.query = params['search'];
      this.getDataFromService();
    })
  }


}
