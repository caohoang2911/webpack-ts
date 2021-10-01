function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 200);
  });
}
beforeAll(() => {
  fetchData();
});
describe('List', () => {
  test('check response', () => {
    fetchData().then((data) => {
      expect(data).toBe('peanut butter');
    });
  });
});

export {};
