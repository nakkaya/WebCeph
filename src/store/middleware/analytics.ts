import { Event } from '../../utils/constants';
import find from 'lodash/find';
import { Store, Dispatch } from 'redux';

const loggable = [
  Event.ADD_MANUAL_LANDMARK_REQUESTED,
  Event.REMOVE_MANUAL_LANDMARK_REQUESTED,
  Event.SHOW_ANALYSIS_RESULTS_REQUESTED,
];

const isLoggable = (type: string) => {
  return find(
    loggable,
    type
  ) !== null;
}

export default (store: Store<any>) => (next: Dispatch<any>) => (action: Action<any>) => {
  const { type, payload } = action;
  if (isLoggable(type)) {
    console.log('It works!', type, payload, store.getState());  
    // @TODO: fetch();
  }
  return next(action);
};