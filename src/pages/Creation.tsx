import { CreationForm } from '../components/CreationForm/CreationForm';
import CreationFormProvider from '../components/CreationForm/CreationFormProvider';

export const Creation = () => {
  return (
    <CreationFormProvider>
      <CreationForm />
    </CreationFormProvider>
  );
};
