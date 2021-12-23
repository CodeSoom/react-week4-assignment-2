/* 계획
1. 아래 컴포넌트를 포함하고 있다
2. 비즈니스 로직을 다룬다
*/
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';


describe("App", () => {
  it("render Lower Component", () => {
   const {getByText} = render(<App />)
    expect(getByText('Restaurants')).not.toBeUndefined();
    expect(getByText('등록')).not.toBeUndefined();
  });  
});









