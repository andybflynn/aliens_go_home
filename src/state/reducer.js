import {MOVE_OBJECTS} from './actions';
import moveObjects from './moveObjects';

export const defaultState = {
  rotationAngle: 45
}

export default function reducer(state, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action)
  }
  return state;
}