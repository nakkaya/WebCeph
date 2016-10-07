export enum ErrorCode {
  INCOMPATIBLE_IMAGE_TYPE,
  UNKNOWN,
}

/**
 * Events are just Redux actions. 
 * The name 'event' however describes better what an action does, 
 * because Redux action should never produce side effects, they 
 * just indicate that something has happend.
 */
export const Event = {
  /* Worker creation and termination */
  WORKER_CREATED: 'WORKER_CREATED',
  WORKER_TERMINATED: 'WORKER_TERMINATED',
  WORKER_STATUS_CHANGED: 'WORKER_STATUS_CHANGED',

  /* SMARTS! */
  SET_IS_CEPHALO_REQUESTED: 'SET_IS_CEPHALO_REQUESTED',

  /* Workspace */
  CANVAS_RESIZED: 'CANVAS_RESIZED',
  ADD_LANDMARK_REQUESTED: 'ADD_LANDMARK_REQUESTED',
  REMOVE_LANDMARK_REQUESTED: 'REMOVE_LANDMARK_REQUESTED',
  SET_ACTIVE_ANALYSIS_REQUESTED: 'SET_ACTIVE_ANALYSIS_REQUESTED',
  FLIP_IMAGE_X_REQUESTED: 'FLIP_IMAGE_X_REQUESTED',
  SET_IMAGE_BRIGHTNESS_REQUESTED: 'SET_IMAGE_BRIGHTNESS_REQUESTED',
  SET_IMAGE_CONTRAST_REQUESTED: 'SET_IMAGE_CONTRAST_REQUESTED',
  INVERT_IMAGE_REQUESTED: 'INVERT_IMAGE_REQUESTED',
  LOAD_IMAGE_REQUESTED: 'LOAD_IMAGE_REQUESTED',
  LOAD_IMAGE_SUCCEEDED: 'LOAD_IMAGE_SUCCEEDED',
  LOAD_IMAGE_FAILED: 'LOAD_IMAGE_FAILED',
  RESET_WORKSPACE_REQUESTED: 'RESET_WORKSPACE_REQUESTED',
  IGNORE_WORKSPACE_ERROR_REQUESTED: 'IGNORE_WORKSPACE_ERROR_REQUESTED',

  /* Analysis fetching */
  FETCH_ANALYSIS_REQUESTED: 'FETCH_ANALYSIS_REQUESTED',
  FETCH_ANALYSIS_SUCCEEDED: 'FETCH_ANALYSIS_SUCCEEDED',
  FETCH_ANALYSIS_FAILED: 'FETCH_ANALYSIS_FAILED',

  /* Automatic tracing */
  TRY_AUTOMATIC_STEPS_REQUESTED: 'TRY_AUTOMATIC_STEPS_REQUESTED',
  STEP_EVALUATION_STARTED: 'STEP_EVALUATION_STARTED',
  STEP_EVALUATION_FINISHED: 'STEP_EVALUATION_FINISHED',

  /* Browser compatiblity checking */
  BROWSER_COMPATIBLITY_CHECK_REQUESTED: 'BROWSER_COMPATIBLITY_CHECK_REQUESTED',
  BROWSER_COMPATIBLITY_CHECK_SUCCEEDED: 'BROWSER_COMPATIBLITY_CHECK_SUCCEEDED',
  BROWSER_COMPATIBLITY_CHECK_FAILED: 'BROWSER_COMPATIBLITY_CHECK_FAILED',
  IGNORE_BROWSER_COMPATIBLITY_REQUESTED: 'IGNORE_BROWSER_COMPATIBLITY_REQUESTED',
  ENFORCE_BROWSER_COMPATIBLITY_REQUESTED: 'ENFORCE_BROWSER_COMPATIBLITY_REQUESTED',
  BROWSER_COMPATIBLITY_CHECK_MISSING_FEATURE_DETECTED: 'BROWSER_COMPATIBLITY_CHECK_MISSING_FEATURE_DETECTED',

  /** State persistence */
  LOAD_PERSISTED_STATE_REQUESTED: 'LOAD_PERSISTED_STATE_REQUESTED',
  LOAD_PERSISTED_STATE_SUCCEEDED: 'LOAD_PERSISTED_STATE_SUCCEEDED',
  LOAD_PERSISTED_STATE_FAILED: 'LOAD_PERSISTED_STATE_FAILED',
  PERSIST_STATE_REQUESTED: 'PERSIST_STATE_REQUESTED',
  PERSIST_STATE_SUCCEEDED: 'PERSIST_STATE_SUCCEEDED',
  PERSIST_STATE_FAILED: 'PERSIST_STATE_FAILED',
};

export enum ImageWorkerAction {
  READ_AS_DATA_URL,
  PERFORM_EDITS,
  IS_CEPHALO,
}