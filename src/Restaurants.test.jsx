import React from 'react'
import { render } from '@testing-library/react';
import Restaurants from './Restaurants';

test('Restaurants', () => {
 const { getByText } = render((
    <Restaurants restaurants={restaurants} />
 ));

  expect(getByText('김밥제국')).not.toBeNull();
});
