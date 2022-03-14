import { render } from '@testing-library/react';

import FormContainer from './FormContainer';

// 목적: 등록onClick이 올바르게 동작하는가?

test('FormContainer', () => {
  const renderFormContainer = () => render((
    <FormContainer />
  ));

  renderFormContainer();
});
