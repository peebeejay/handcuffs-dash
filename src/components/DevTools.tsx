import { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-use-gesture';
import { Gray1, Gray2, Gray3 } from '../colors';
import { useLocalStorage } from '../hooks/useLocalStorage';

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

  &:active {
    background-color: ${Gray3};
  }
`;

export const DevTools = () => {
  /* Store dev tools position in local storage */
  const [lsx, setLsx] = useLocalStorage<number>('hc-devtools-pos-x', 50);
  const [lsy, setLsy] = useLocalStorage<number>('hc-devtools-pos-y', 50);
  /* tx - The amount by which the component should be translated or offset on the x-axis */
  const [tx, setXOffset] = useState<number>(lsx);
  /* ty - The amount by which the component should be translated or offset on the y-axis */
  const [ty, setYOffset] = useState<number>(lsy);

  const bind = useDrag(({ last, delta: [dx, dy] }) => {
    setXOffset(tx + dx);
    setYOffset(ty + dy);

    if (last) {
      setLsx(tx);
      setLsy(ty);
    }
  });

  return (
    <NavHelper {...bind()} x={tx} y={ty}>
      {'⚡️~Dev Toolz~🤓'}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Creation</Link>
        </li>
        <li>
          <Link to="/lock/5">Detail</Link>
        </li>
        <li>
          <Link to="/vaults">Vaults</Link>
        </li>
      </ul>
    </NavHelper>
  );
};
