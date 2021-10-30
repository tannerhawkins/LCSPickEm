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

export const selectNextID = createSelector(selectSteps, (steps) => {
  if (steps.length === 0) {
    return 0;
  } else {
    return Math.max(...steps.map((step) => step.id)) + 1;
  }
});

export const selectCurrentStepData = createSelector(
  selectCurrentStep,
  selectSteps,
  (currentStep, steps) => steps[currentStep].data
)
