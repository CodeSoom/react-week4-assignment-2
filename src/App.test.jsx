describe('<App />', () => {
  context('when the user does nothing', () => {
    it('shows a app title', () => {

      const { container } = render(<App />);

      expect(container).toHaveTextContent('Restaurants');

    });

    it('shows 3 inputs', () => {});

    it('shows a button for adding a restaurant ', () => {});
  });

  context('when the user input a new restaurant', () => {
    it('shows a new restaurant in inputs', () => {});
  });

  context('when the user add a new restaurant', () => {
    it('input is empty', () => {});

    it('shows a new restaurant into restaurants', () => {});
  });

});
