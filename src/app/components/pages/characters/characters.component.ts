import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Character } from '@shared/interfaces/character.interface';


@Component({
  selector: 'app-character',
  template: `
    <article class="card">
        <div class="image">
            <a [routerLink]="['/character-details', character?.id]">
                <img 
                    [src]="character?.image"
                    [alt]="character?.name"   
                    class="card-img-top"
                />
            </a>
        </div>
        <div class="card__content">
            <h3 class="card__title">{{ character?.name }}</h3>
            <span class="card__subtitle">{{ character?.gender }}</span>
            <p class="card__description">{{ character?.created | date }}</p>
            <!--<pre>{{ (character?.location | json) }}</pre>-->
        </div>
    </article>`,
    styleUrls: ['./character-component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent {
    @Input() character:Character | undefined;
}