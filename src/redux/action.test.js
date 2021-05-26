import { addRestaurant, updateField } from './actions';

describe('actions', () => {
  it('creates action for addRestaurant', () => {
    const newRestaurant = {
      id: 2, name: '시카고피자', category: '양식', address: '이태원동',
    };

    expect(addRestaurant(newRestaurant)).toEqual({
      type: 'restaurant/addItem',
      payload: {
        id: 2,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
    });
  });

  it('creates action for updateField', () => {
    expect(updateField({ field: 'name', value: '마녀 주방' })).toEqual({
      type: 'restaurant/updateField',
      payload: {
        field: 'name',
        value: '마녀 주방',
      },
    });
  });
});
