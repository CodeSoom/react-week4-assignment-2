import reducer from './reducer';

describe('reducer', () => {
  // 각 3개 추가
  // 등록 하는 버튼
  describe('addRestaurant', () => {
    context('with input data', () => {
      it('returns state with append restaurants data', () => {

        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'addRestaurant',
          payload: {
            input: {
              name: '마녀주방',
              category: '양식',
              address: '서울시 강남구'
            }
          }
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].category).toBe('양식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
      });
    });

    context('without all input data', () => {
      it ('doesnt work', () => {
        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'addRestaurant',
          payload: {
            input: {
              name: '',
              category: '',
              address: ''
            }
          }
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without name input data', () => {
      it ('doesnt work', () => {
        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'addRestaurant',
          payload: {
            input: {
              name: '',
              category: '카테고리',
              address: '주소',
            }
          }
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without category', () => {
      it ('doesnt work', () => {
        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'addRestaurant',
          payload: {
            input: {
              name: '이름',
              category: '',
              address: '주소'
            }
          }
        });

        expect(state.restaurants).toHaveLength(0);
      })
    });

    context('without address', () => {
      it ('doesnt work', () => {
        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'addRestaurant',
          payload: {
            input: {
              name: '이름',
              category: '카테고리',
              address: ''
            }
          }
        });

        expect(state.restaurants).toHaveLength(0);
      })
    })
  });

  describe('changeInput', () => {
    context('with change name input data', () => {
      it ('returns state with changed input data', () => {

        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'updateInput',
          payload: {
            key: 'name',
            value: '바보',
          }
        });

        expect(state.input.name).toBe('바보');
      });
    });

    context('with change category input data', () => {
      it ('returns state with changed input data', () => {

        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'updateInput',
          payload: {
            key: 'category',
            value: '바보',
          }
        });

        expect(state.input.category).toBe('바보');
      });
    });

    context('with change address input data', () => {
      it ('returns state with changed input data', () => {

        const state = reducer({
          input: {
            name: '',
            category: '',
            address: '',
          },
          restaurants: []
        }, {
          type: 'updateInput',
          payload: {
            key: 'address',
            value: '바보',
          }
        });

        expect(state.input.address).toBe('바보');
      });
    });
  });
});