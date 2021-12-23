import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restautrants } from '../fixture/restautrants';

describe('Restaurants', () => {
  const renderComponent = (values) => render(
    <Restaurants restaurants={values} />,
  );

  context('with restaurants', () => {
    it('render restautrant info', () => {
      const { container } = renderComponent(restautrants);

      restautrants.forEach((restautrant) => {
        expect(container).toHaveTextContent(restautrant.name);
        expect(container).toHaveTextContent(restautrant.type);
        expect(container).toHaveTextContent(restautrant.address);
      });
    });
  });

  context('without restaurants', () => {
    it('render empty', () => {
      const { container } = renderComponent([]);

      expect(container.firstChild).toBeNull();
    });
  });
});
