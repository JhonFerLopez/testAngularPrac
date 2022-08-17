import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map, debounceTime, fromEvent, distinctUntilChanged } from 'rxjs';
import { CharacterService } from '@shared/services/character.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('inputSearch')
  private inputSearch?: ElementRef;
  constructor(
    private router: Router ,
    private characterSvc: CharacterService   
  ) { }

  ngAfterViewInit(): void {
    fromEvent<any>(
      this.inputSearch?.nativeElement,'keyup'
    )
    .pipe(
      map(event => event.target.value),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(text => this.characterSvc.emitText(text))
  }

  ngOnInit(): void {
    this.characterSvc.textObservable$.subscribe()
  }
  onSearch (value: string) {
    console.log('QueryParams-> ',value);
    if(value && value.length > 3){
      this.router.navigate(['/character-list'], {
        queryParams: { search: value },
      })
    } else {
      this.router.navigate(['/home'])
    }
  }
}
