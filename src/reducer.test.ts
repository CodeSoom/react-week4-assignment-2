import { addRestaurant, updateAddress, updateName, updateType } from "./actions"
import reducer from "./reducer"

describe('reducer', () => {
    describe('updateName', () => {
        test('state의 restaurantName이 시카고피자로 바뀐다.', () => {
            const state = reducer({
                newId: 1, 
                restaurantName: '', 
                restaurantType: '', 
                restaurantAddress: '', 
                restaurants: []}, 
            updateName('시카고피자'));

            expect(state.restaurantName).toBe('시카고피자')
        })
    })

    describe('updateType', () => {
        test('state의 restaurantType이 양식으로 바뀐다.', () => {
            const state = reducer({
                newId: 1, 
                restaurantName: '', 
                restaurantType: '', 
                restaurantAddress: '', 
                restaurants: []}, 
            updateType('양식'));

            expect(state.restaurantType).toBe('양식')
        })
    })

    describe('updateAddress', () => {
        test('state의 restaurantAddress이 이태원동으로 바뀐다.', () => {
            const state = reducer({
                newId: 1, 
                restaurantName: '', 
                restaurantType: '', 
                restaurantAddress: '', 
                restaurants: []}, 
            updateAddress('이태원동'));

            expect(state.restaurantAddress).toBe('이태원동')
        })
    })

    describe('addRestaurant', () => {
        test('state의 restaurants에 값이 추가된다.', () => {
            const state = reducer({
                newId: 1, 
                restaurantName: '시카고피자', 
                restaurantType: '양식', 
                restaurantAddress: '이태원동', 
                restaurants: []}, 
            addRestaurant());

            expect(state.restaurants).toHaveLength(1);
            expect(state.newId).toBe(2)
            expect(state.restaurants[0].name).toBe('시카고피자')
            expect(state.restaurants[0].type).toBe('양식')
            expect(state.restaurants[0].address).toBe('이태원동')

        })
    })
})