import styled from 'styled-components';
import { rem } from 'polished';
import {
  KeyboardDatePicker as MUDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { DateTime } from 'luxon';
import LuxonUtils from '@date-io/luxon';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { PrimaryBlue, PrimaryBlueDark } from '../../colors';

type Props = {
  selectedDate: DateTime | null;
  setSelectedDate: (date: DateTime | null) => void;
};

const materialTheme = createMuiTheme({
  overrides: {
    /* @ts-ignore */
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: PrimaryBlue,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {},
    },
    MuiPickersDay: {
      day: {
        color: PrimaryBlueDark,
      },
      daySelected: {
        backgroundColor: PrimaryBlue,
      },
      dayDisabled: {
        color: lightBlue['100'],
      },
      current: {
        color: lightBlue['900'],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: PrimaryBlue,
      },
    },
  },
});

const MUDatePickerStyled = styled(MUDatePicker)`
  width: 100%;
  outline: none;

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${PrimaryBlue};
  }

  &:hover {
    .MuiOutlinedInput-notchedOutline {
      border-color: ${PrimaryBlue};
    }
  }

  input {
    height: ${rem(15)};
    font-family: 'Poppins', sans-serif;
  }
`;

export const DatePicker = (props: Props) => {
  const { selectedDate, setSelectedDate } = props;

  const handleDateChange = (date: DateTime | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <ThemeProvider theme={materialTheme}>
        <MUDatePickerStyled
          autoOk
          value={selectedDate}
          onChange={handleDateChange}
          inputVariant="outlined"
          variant="inline"
          InputAdornmentProps={{ position: 'end' }}
          format="d MMMM yyyy"
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};
