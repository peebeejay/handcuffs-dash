import styled from 'styled-components';
import { rem } from 'polished';
import MUTextField from '@material-ui/core/TextField';
import { PrimaryBlue } from '../../colors';

export const Input = styled((props) => (
  <MUTextField classes={{ root: 'root' }} {...props} />
))`
  width: 100%;
  input {
    height: ${rem(15)};
    font-family: 'Poppins', sans-serif;
  }

  &.root {
    outline: none;

    .MuiOutlinedInput-notchedOutline {
      border-radius: ${rem(12)};
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${PrimaryBlue};
    }

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${PrimaryBlue};
      }
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;
