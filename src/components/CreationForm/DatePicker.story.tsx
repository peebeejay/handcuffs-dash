import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { DatePicker as DatePickerComponent } from './DatePicker';
import { DateTime } from 'luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';

export default {
  title: 'shared/DatePicker',
  component: DatePickerComponent,
} as Meta;

export const DatePicker: Story = () => {
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(DateTime.now());

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DatePickerComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </MuiPickersUtilsProvider>
  );
};
