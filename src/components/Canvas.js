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

const Canvas = ({rotationAngle, trackMouse, startGame, gameState, shoot}) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

  const lives = [];
  for (let i = 0; i < gameState.lives; i++) {
    const heartPosition = {
      x: -180 - (i * 70),
      y: 35
    };
    lives.push(<Heart key={i} position={heartPosition}/>);
  }

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      onClick={shoot}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky></Sky>
      <Ground></Ground>
      {gameState.cannonBalls.map(cannonBall => (
        <CannonBall
          key={cannonBall.id}
          position={cannonBall.position}
        />
      ))}
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
      <CurrentScore score={gameState.kills}></CurrentScore>
      {lives}
    </svg>
  );
};

export default Canvas;