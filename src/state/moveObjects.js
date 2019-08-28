import { calculateAngle } from '../utils/formulas';

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;
  const rotationAngle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    rotationAngle,
  };
}

export default moveObjects;