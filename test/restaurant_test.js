Feature('Restaurant');

Scenario('앱 제목을 볼 수 있습니다.', (I) => {
  I.amOnPage('/');

  I.see('Restaurants');
});
