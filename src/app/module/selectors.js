import { createSelector } from "reselect";
import { store } from "../store.js";

const selectState = () => store.getState();

const selectModuleState = createSelector(selectState, (state) => state.module);

export const selectIsInModule = createSelector(
  selectModuleState,
  (state) => state.inModule
);

export const selectCurrentStep = createSelector(
  selectModuleState,
  (state) => state.currentStep
);

export const selectSelectedModule = createSelector(
  selectModuleState,
  (state) => state.selectedModule
);

export const selectSteps = createSelector(
  selectSelectedModule,
  (module) => module?.steps
);
