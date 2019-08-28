import {MOVE_OBJECTS, START_GAME} from './actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
  started: false,
  kills: 0,
  score: 0,
  lives: 3,
}

export const defaultState = {
  gameState: initialGameState,
  rotationAngle: 45
}

export default function reducer(state, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
  }
  return state;
}