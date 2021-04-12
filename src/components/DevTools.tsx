import { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useDrag } from 'react-use-gesture';
import { Gray1, Gray2 } from '../colors';
import { Link } from 'react-router-dom';

type Position = {
  x: number;
  y: number;
};

const NavHelper = styled.div.attrs(({ x, y }: Position) => ({
  style: {
    top: rem(y),
    left: rem(x),
  },
}))<Position>`
  position: absolute;
  height: ${rem(150)};
  width: ${rem(150)};
  background-color: ${Gray1};
  border: 1px solid ${Gray2};
  border-radius: ${rem(10)};
  top: 80%;
  cursor: pointer;
  transition: 200ms background-color ease;
  padding: ${rem(5)};

  &:hover {
    background-color: ${Gray2};
  }
`;

export const DevTools = () => {
  // tx - The amount by which the component should be translated or offset on the x-axis
  const [tx, setXOffset] = useState<number>(50);
  // ty - The amount by which the component should be translated or offset on the y-axis
  const [ty, setYOffset] = useState<number>(50);

  const bind = useDrag(({ delta: [dx, dy] }) => {
    setXOffset(tx + dx);
    setYOffset(ty + dy);
  });

  return (
    <NavHelper {...bind()} x={tx} y={ty}>
      {'Dev Toolz '}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Creation</Link>
        </li>
        <li>
          <Link to="/lock/5">Sample Detail Page</Link>
        </li>
      </ul>
    </NavHelper>
  );
};
