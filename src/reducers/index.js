import { RECEIVE_ALL_SEASONS } from '../actions';

export const seasons = (state = [], action) => {
  switch (action.type) {

  case RECEIVE_ALL_SEASONS:
    return action.seasons;

  default:
    return state;
  }
};
