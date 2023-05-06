describe('weather application', () => {
  it('shows the application title', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Weather Application');
  })

  it('search for a city', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.contains('Search').click();

    cy.get('[data-testid="search-results"] .search-result')
      .should('have.length', 5);
  })

  it('add city to a list', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.contains('Search').click();

    cy.get('[data-testid="search-results"] .search-result').first().click();

    cy.get('[data-testid="my-weather-list"]').contains('Melbourne');
  })

  it('intercepts a request and returns mocked data', () => {
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*', {
      fixture: 'melbourne-weather.json'
    }).as('getWeather')

    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.contains('Search').click();

    cy.get('[data-testid="search-results"] .search-result').first().click();

    cy.get('[data-testid="my-weather-list"]').contains('Melbourne');
    cy.get('.weather-category').contains('clouds');
    cy.get('.temperature').contains('14°');
  })
})