import { Component, OnInit } from '@angular/core';
import { PersonificationFacade } from '@requirements/developing/domain';
import { tap } from "rxjs";

@Component({
  selector: 'developing-personification',
  templateUrl: './personification.component.html',
  styleUrls: ['./personification.component.scss'],
})
export class PersonificationComponent implements OnInit {
  personaList$ = this.personificationFacade.personaList$.pipe(
    tap(console.log)
  );

  constructor(private personificationFacade: PersonificationFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.personificationFacade.load();
  }

  onPinPerson(id: number){
    this.personificationFacade.pinPerson(id);
  }
}
