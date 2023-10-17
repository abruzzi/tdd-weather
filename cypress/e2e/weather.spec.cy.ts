import searchResults from '../fixtures/search-result.json';

describe('weather application', () => {
  it('shows the application title', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Weather Application');
  })

  it('search for a city', () => {
    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct?q=*", {
      statusCode: 200,
      body: searchResults,
    });

    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.contains('Search').click();

    cy.get('[data-testid="search-results"] .search-result')
      .should('have.length', 5);
  })
});