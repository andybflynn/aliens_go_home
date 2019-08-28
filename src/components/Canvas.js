import * as React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = ({rotationAngle, trackMouse}) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}
    >
      <Sky></Sky>
      <Ground></Ground>
      <CannonPipe rotation={rotationAngle}></CannonPipe>
      <CannonBase></CannonBase>
    </svg>
  );
};

export default Canvas;