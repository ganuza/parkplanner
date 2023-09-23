describe('National Parks page on-load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG", {
      statusCode: 200,
      fixture: "parksData",
    }).as("allparksApiTest");

    cy.visit("http://localhost:3000");
  });

  it('should have a header on page load', () => {
    cy.location('pathname').should('eq', '/');
    cy.get('header')
      .should('exist')
      .contains('h1', 'ParkPlanner')
      .get('img')
      .should(
        'have.attr',
        'src',
        '/static/media/Arrowhead_3.bf00a3ec455cacafcfa9.png'
      )
      .get('.search-field')
      .should('exist')
      .get('input')
      .should('not.have.value')
  })
  
  it('should show national parks', () => {
    cy.wait(['@allparksApiTest']);
    cy.get('.all-parks-cont').find('.parks-card').should('have.length', 2)
    cy.get('.parks-card').first().contains('h2', 'Acadia')
  })

  it('should show park details', () => {
    cy.wait(['@allparksApiTest']);
    cy.get('.all-parks-cont')
      .children()
      .get(':nth-child(1)')
      .contains('h2', 'Acadia National Park')
      .get('img.park-img')
      .should('have.attr', 'alt', 'Large puffy clouds dot a brilliant blue sky as wave crash against the rocky coastline of Acadia.')
  })

  it('update url to clicked park details', () => {
    cy.get('.parks-card')
    .first()
    .click()
    .url()
    .should('eq', 'http://localhost:3000/park/acad')
  })
  
  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {
      statusCode: 500,
    })
    cy.contains('h2', "Woops, We couldn't find that!")
    cy.get('.link-home-btn')
    .click().url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 400 error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {
      statusCode: 400,
    })
    cy.contains('h2', 'Server Error')
    cy.get('.link-home-btn')
    .click().url().should('eq', 'http://localhost:3000/')
  })
})

describe('Search Functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {
      statusCode: 200,
      fixture: 'parksData',
    }).as('allparksApiTest')

    cy.visit('http://localhost:3000')
  })

  it('should be able to type into a search input', () => {
    cy.get('input').type('acadia').should('have.value', 'acadia')
  })

  it('should filter parks based on search query', () => {
    cy.get('input').type('acadia')
    cy.get('.parks-card').should('have.length', 1).contains('h2', 'Acadia')
  })

  it('should show user feedback if no results', () => {
    cy.get('input').type('golden')
    cy.get('.search-feedback').contains('No matching parks were found.')
  })
})

