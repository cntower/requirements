import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadPersona } from '../+state/persona/persona.actions';
import * as fromPersona from '../+state/persona/persona.reducer';
import * as PersonaSelectors from '../+state/persona/persona.selectors';

@Injectable({ providedIn: 'root' })
export class PersonificationFacade {
  loaded$ = this.store.pipe(select(PersonaSelectors.getPersonaLoaded));
  personaList$ = this.store.pipe(select(PersonaSelectors.getAllPersona));
  selectedPersona$ = this.store.pipe(select(PersonaSelectors.getSelected));

  constructor(public store: Store<fromPersona.PersonaPartialState>) {
    console.log(store,)
  }

  load(): void {
    this.store.dispatch(loadPersona());
  }

  pinPerson(id: number) {
    console.log('pinPerson', id);
  }
}
