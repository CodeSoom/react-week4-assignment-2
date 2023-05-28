import reducer from './reducer';
import { updateInput, addRestaurant } from './action';

// 테스트하고자 하는 것의 input과 output을 명확하게 해야하지
// input? 변경 전 state,action
// output? 변경 후 state

// describe('reducer', () => {
//   describe('taskTitle을 변경한다', () => {
//     it('taskTitle이 변경된 상태를 반환한다.', () => {
//       const prevState = {
//         id: 100,
//         title: '',
//         sort: '',
//         location: '',
//         restaurants: [],
//       };
//       const inputName = {
//         name: 'title',
//         value: 'test',
//       };

//       const { name, value } = inputName;
//       const state = reducer(prevState, updateInput({ name, value }));
//       expect(state.title).toBe('test');
//     });
//   });

//   describe('taskTitle을 추가한다', () => {
//     context('taskTitle이 없는 경우', () => {
//       const prevState = {
//         id: 100,
//         title: 'title test',
//         sort: 'sort test',
//         location: 'location test',
//         restaurants: [],
//       };
//       const state = reducer(prevState, addRestaurant());
//       expect(state.restaurants[0].title).toBe('title test');
//       expect(state.restaurants[0].id).toBe(100);
//       expect(state.restaurants).toHaveLength(1);
//       expect(state.id).toBe(101);
//     });
//   });
// });
