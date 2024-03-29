import * as React from 'react';

const CurrentScore = React.memo(({score}) => {
  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: '#d6d33e',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="300" y="80">
        {score}
      </text>
    </g>
  );
});

export default CurrentScore;