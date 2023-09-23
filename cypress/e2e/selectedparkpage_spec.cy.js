describe('selected park page on load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/parks?limit=1000&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG", {
      statusCode: 200,
      fixture: "parksData",
    }).as('allparks');

    cy.visit("http://localhost:3000")

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {
      statusCode: 200,
      fixture: 'selectedParkData'
    }).as('selectedpark')
  })

  it('should get Zion National Park and show details and show header', () => {
    cy.get('.parks-card').last().click()
    cy.wait(['@allparks'])
      .url().should('eq', 'http://localhost:3000/park/zion')

    cy.get('header').should('exist')
      .contains('h1', 'ParkPlanner')

    .get('img').should('have.attr', 'src', '/static/media/Arrowhead_3.bf00a3ec455cacafcfa9.png')

    .get('.chosen-park').should('exist')
    .get('.description-cont').contains('Follow the paths where people have walked for thousands of years. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present-day adventures.')

    .get('.chosen-park')
    .get('.activity-list').contains('Astronomy')
  })

  it('ParkPlanner logo should be clicked to return home', () => {
    cy.visit('http://localhost:3000')
    cy.get('.parks-card').last().click()
      .url().should('eq', 'http://localhost:3000/park/zion')

    cy.get('.homepage-link')
      .get('h1').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {
      statusCode: 500,
    })
    .visit('http://localhost:3000/park/')
    cy.contains('h2', "Woops, We couldn't find that!")
    cy.get('.link-home-btn').click()
  })

  it('should display anerror message for 400 error', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=eUYXl96Cb1zurRmYKjTUhznFQ23gnifeMJidB3rG', {statusCode: 400,
    })
    .visit('http://localhost:3000/park/zion/frs')
    cy.contains('h2', "The page you're looking for doesn't exist.")
    cy.get('.link-home-btn').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})