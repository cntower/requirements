describe('developing-feature-personification', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=personificationcomponent--primary')
  );
  it('should render the component', () => {
    cy.get('developing-personification').should('exist');
  });
});
