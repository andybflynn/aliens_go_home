import * as React from 'react';
import AppContext from './state/context';
import reducer, {defaultState} from './state/reducer';
import Canvas from './components/Canvas';
import {moveObjects, startGame} from './state/actions';
import {getCanvasPosition} from './utils/formulas';

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const canvasMousePosition = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      dispatch(moveObjects(canvasMousePosition.current));
    }, 20);
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }, []);

  const trackMouse = (event) => {
    canvasMousePosition.current = getCanvasPosition(event);
  };

  const startTheGame = () => {
    dispatch(startGame());
  }

  return (
    <AppContext.Provider value={dispatch}>
      <Canvas rotationAngle={state.rotationAngle} trackMouse={trackMouse} startGame={startTheGame} gameState={state.gameState}></Canvas>
    </AppContext.Provider>
  )
}