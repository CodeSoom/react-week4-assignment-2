Feature('Create restaurant');

const restaurant = {
  name: '마녀주방',
  category: '한식',
  address: '서울시 강남구',
};

Scenario('이름, 분류 그리고 주소를 입력한 후 확인을 누르면 레스토랑이 추가가 됩니다.', ({ I }) => {
  I.amOnPage('/');

  const { name, category, address } = restaurant;

  I.fillField('input[name=restaurantName]', name);
  I.fillField('input[name=restaurantType]', category);
  I.fillField('input[name=restaurantAdress]', address);

  I.click('등록');

  I.see(name);
  I.see(category);
  I.see(address);
});
