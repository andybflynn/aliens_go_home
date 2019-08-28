import * as React from 'react';
import AppContext from './state/context';
import reducer, {defaultState} from './state/reducer';
import Canvas from './components/Canvas';
import {moveObjects} from './state/actions';
import {getCanvasPosition} from './utils/formulas';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const canvasMousePosition = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      dispatch(moveObjects(canvasMousePosition.current));
    }, 20);
  }, []);

  const trackMouse = (event) => {
    canvasMousePosition.current = getCanvasPosition(event);
  };

  return (
    <AppContext.Provider value={dispatch}>
      <Canvas rotationAngle={state.rotationAngle} trackMouse={trackMouse}></Canvas>
    </AppContext.Provider>
  )
}