import * as React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = ({rotationAngle, trackMouse, startGame, gameState}) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky></Sky>
      <Ground></Ground>
      <CannonPipe rotation={rotationAngle}></CannonPipe>
      <CannonBase></CannonBase>
      { !gameState.started &&
        <g>
          <StartGame onClick={() => startGame()} />
          <Title />
        </g>
      }

      { gameState.started &&
        <g>
          {gameState.flyingObjects.map(flyingObject => (
            <FlyingObject
              key={flyingObject.id}
              position={flyingObject.position}
            />
          ))}
        </g>
      }
      <CannonBall position={{x: 0, y: -100}}/>
      <CurrentScore score={35}></CurrentScore>
      <Heart position={{x: -300, y: 35}} />
    </svg>
  );
};

export default Canvas;