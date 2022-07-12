import { createAction, props } from '@ngrx/store';
import { Persona } from '../../entities/persona';

export const loadPersona = createAction('[Persona] Load Persona');

export const loadPersonaSuccess = createAction(
  '[Persona] Load Persona Success',
  props<{ persona: Persona[] }>()
);

export const loadPersonaFailure = createAction(
  '[Persona] Load Persona Failure',
  props<{ error: any }>()
);
