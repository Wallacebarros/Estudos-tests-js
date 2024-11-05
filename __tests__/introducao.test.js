describe('basic structure', () => {
  it('expect and toBe', () => {
    function myPizza() {
      return "Pizza";
    };

    expect(myPizza()).toBe("Pizza");
  });
});
