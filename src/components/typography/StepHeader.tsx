import styled from 'styled-components';
import { rem } from 'polished';
import { TextDark } from '../../colors';

export const StepHeader = styled.div`
  color: ${TextDark};
  font-size: ${rem(32)};
  line-height: ${rem(42)};
  font-weight: 700;
`;
