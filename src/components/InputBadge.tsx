import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { InputBlue, InputOrange, InputPurple } from '../colors';
import { ShieldIcon } from './icons/Shield';

export enum Variants {
  Blue,
  Orange,
  Purple,
}

export const variantsList = [Variants.Blue, Variants.Orange, Variants.Purple];

const COLORS = {
  [Variants.Blue]: InputBlue,
  [Variants.Orange]: InputOrange,
  [Variants.Purple]: InputPurple,
};

type Props = {
  variant: Variants;
};

const Circle = styled.div<{
  variant: Variants;
}>`
  position: relative;
  background-color: ${({ variant }) => transparentize(0.85, COLORS[variant])};
  border-radius: 50%;
  height: ${rem(44)};
  width: ${rem(44)};
`;

const Shield = styled(ShieldIcon)<{
  variant: Variants;
}>`
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  path {
    fill: ${({ variant }) => COLORS[variant]};
  }
`;

export const InputBadge = ({ variant }: Props) => {
  return (
    <Circle variant={variant}>
      <Shield variant={variant} />
    </Circle>
  );
};
