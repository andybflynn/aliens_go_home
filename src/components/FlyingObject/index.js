import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import FlyingObjectBase from './FlyingObjectBase';
import FlyingObjectTop from './FlyingObjectTop';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1200px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;

const FlyingObject = props => (
  <Move>
    <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} />
  </Move>
);

export default FlyingObject;