import styled from 'styled-components';
import { rem } from 'polished';
import { TextDark } from '../../colors';

export const LargeHeader = styled.div`
  font-weight: 700;
  font-size: ${rem(42)};
  color: ${TextDark};
`;
