import styled from 'styled-components';
import { rem } from 'polished';
import { TextLight } from '../../colors';

export const SubHeader = styled.div`
  color: ${TextLight};
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
`;
