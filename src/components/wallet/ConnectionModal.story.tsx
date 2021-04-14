import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { ConnectionModal as ConnectionModalComponent } from './ConnectionModal';
import { Button } from '../shared/Button';

export default {
  title: 'portals/ConnectionModal',
  component: ConnectionModalComponent,
} as Meta;

export const ConnectionModal: Story = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>{'Open Modal'}</Button>
      <ConnectionModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
