import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PersonaActions from './persona.actions';
import { PersonaDataService } from '../../infrastructure/persona.data.service';

@Injectable()
export class PersonaEffects {
  loadPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonaActions.loadPersona),
      switchMap((action) =>
        this.personaDataService.load().pipe(
          map((persona) => PersonaActions.loadPersonaSuccess({ persona })),
          catchError((error) =>
            of(PersonaActions.loadPersonaFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private personaDataService: PersonaDataService
  ) {}
}
