import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PersonaActions from './persona.actions';
import { Persona } from '../../entities/persona';

export const PERSONA_FEATURE_KEY = 'developing-persona';

export interface State extends EntityState<Persona> {
  selectedId?: string | number; // which Persona record has been selected
  loaded: boolean; // has the Persona list been loaded
  error?: string | null; // last known error (if any)
}

export interface PersonaPartialState {
  readonly [PERSONA_FEATURE_KEY]: State;
}

export const personaAdapter: EntityAdapter<Persona> =
  createEntityAdapter<Persona>();

export const initialState: State = personaAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const personaReducer = createReducer(
  initialState,
  on(PersonaActions.loadPersona, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PersonaActions.loadPersonaSuccess, (state, { persona }) =>
    personaAdapter.upsertMany(persona, { ...state, loaded: true })
  ),
  on(PersonaActions.loadPersonaFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return personaReducer(state, action);
}
