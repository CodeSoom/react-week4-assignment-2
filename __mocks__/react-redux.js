export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  restaurants: [
    {
      id: 1, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Iteawon',
    },
    {
      id: 2, name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
    },
  ],
}));
