import * as fromPersona from './+state/persona/persona.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaEffects } from './+state/persona/persona.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPersona.PERSONA_FEATURE_KEY,
      fromPersona.reducer
    ),
    EffectsModule.forFeature([PersonaEffects]),
  ],
})
export class DevelopingDomainModule {}
