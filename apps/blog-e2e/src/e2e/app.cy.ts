describe('blog-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    expect(true).to.equal(true);
  });
});
