import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PERSONA_FEATURE_KEY,
  State,
  PersonaPartialState,
  personaAdapter,
} from './persona.reducer';

// Lookup the 'Persona' feature state managed by NgRx
export const getPersonaState = createFeatureSelector<
  PersonaPartialState,
  State
>(PERSONA_FEATURE_KEY);

const { selectAll, selectEntities } = personaAdapter.getSelectors();

export const getPersonaLoaded = createSelector(
  getPersonaState,
  (state: State) => state.loaded
);

export const getPersonaError = createSelector(
  getPersonaState,
  (state: State) => state.error
);

export const getAllPersona = createSelector(getPersonaState, (state: State) =>
  selectAll(state)
);

export const getPersonaEntities = createSelector(
  getPersonaState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPersonaState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPersonaEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
