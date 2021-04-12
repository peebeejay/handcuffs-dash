import styled from 'styled-components';
import { rem } from 'polished';
import { Gray3 } from '../../colors';

export const Divider = styled.div`
  border: ${rem(1)} solid ${Gray3};
  width: ${rem(370)};
`;
