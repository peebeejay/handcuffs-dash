import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { TextDark } from '../../colors';

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${TextDark};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:active {
    text-decoration: none;
  }
`;
