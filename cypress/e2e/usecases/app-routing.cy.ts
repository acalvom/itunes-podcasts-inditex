describe('List all podcasts workflow', () => {
  const appUrl = `${Cypress.env('appUrl')}`
  const apiUrl = `${Cypress.env('apiUrl')}`

  before(() => {
    cy.intercept(
      { method: 'GET', url: apiUrl + '/us/rss/toppodcasts/limit=100/genre=1310/json' },
      { fixture: 'podcasts-from-api.json' }
    ).as('getPodcastsFromApi')
    cy.intercept(
      {
        method: 'GET',
        url: apiUrl + '/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=1000',
      },
      { fixture: 'episodes-from-api.json' }
    ).as('getPodcastsFromApi')

    cy.visit(appUrl)
    cy.wait('@getPodcastsFromApi')
  })

  after(() => {
    cy.clearLocalStorage()
  })

  it('Navigate to unexisting page', () => {
    cy.visit(appUrl + '/not-found')
    cy.getByTestId('page-not-found').should('have.text', 'This page does not exist')
  })

  it('Navigate to / when click on header', () => {
    cy.getByTestId('app-title').click()
    cy.url().should('eq', appUrl + '/')
  })

  it('Navigate to podcast detail when click on podcast name', () => {
    cy.visit(appUrl + '/podcast/1535809341/episode/1000654145267')
    cy.getByTestId('podcast-name').parent().click()
    cy.url().should('eq', appUrl + '/podcast/1535809341')
  })
})
