import React, {
  FC,
  useState,
  createContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

type Props = {
  children: React.ReactNode;
};

type InputData = {
  value: string;
};

export type State = {
  stage: number;
  inputs: {
    [key: string]: InputData;
  };
};

export enum Stages {
  First = 0,
  Second = 1,
  Third = 2,
}

export interface Dispatcher {
  updateState: Dispatch<SetStateAction<State>>;
}

export const createInitialState = (): State => ({
  stage: Stages.First,
  inputs: {
    '0': { value: '' },
    '1': { value: '' },
    '2': { value: '' },
  },
});

export const CreationFormDispatch = createContext<Dispatcher>({} as Dispatcher);
export const CreationFormState = createContext<State>({} as State);

const DashboardProvider: FC<Props> = (props) => {
  const [state, updateState] = useState<State>(createInitialState());

  const dispatcher = useMemo(() => {
    return {
      updateState,
    };
  }, []);

  return (
    <CreationFormDispatch.Provider value={dispatcher}>
      <CreationFormState.Provider value={state}>
        {props.children}
      </CreationFormState.Provider>
    </CreationFormDispatch.Provider>
  );
};

export default DashboardProvider;
