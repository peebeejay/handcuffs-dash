import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ProgressBar } from '../components/ProgressBar';
import { CreationForm } from '../components/CreationForm';

export const Creation = () => {
  return (
    <div>
      <ProgressBar percentFilled={40} />
      <CreationForm />
    </div>
  );
};
