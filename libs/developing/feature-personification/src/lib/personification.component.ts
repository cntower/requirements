import { Component, OnInit } from '@angular/core';
import { PersonificationFacade } from '@requirements/developing/domain';

@Component({
  selector: 'developing-personification',
  templateUrl: './personification.component.html',
  styleUrls: ['./personification.component.scss'],
})
export class PersonificationComponent implements OnInit {
  personaList$ = this.personificationFacade.personaList$;

  constructor(private personificationFacade: PersonificationFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.personificationFacade.load();
  }
}
