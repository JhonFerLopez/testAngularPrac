import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Character } from '@shared/interfaces/character.interface';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private textSubject$: BehaviorSubject<string>;
  public textObservable$: Observable<string>

  constructor(
    private http: HttpClient
  ) { 
    this.textSubject$ = new BehaviorSubject<string>('')
    this.textObservable$ = this.textSubject$.asObservable()
  }
  emitText(chars: string){
    this.textSubject$.next(chars);
  }

  searchCharacters(query='', page = 1){
    let params = `${environment.baseUrlApi}/character/?name=${query}&page=${page}`;
    console.log("Url-> ", params);
    return this.http.get<Character[]>(params);
  }

  getDetails(id: number){
    let params = `${environment.baseUrlApi}/character/${id}`;
    console.log("Url-> ", params);
    return this.http.get<Character>(params);
  }

}
