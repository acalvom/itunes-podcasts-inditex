import { mockPodcasts } from '../mocks/podcasts'

describe('List all podcasts workflow', () => {
  const appUrl = `${Cypress.env('appUrl')}`
  const apiUrl = `${Cypress.env('apiUrl')}`

  before(() => {
    cy.visit(appUrl)
    cy.clearLocalStorage()
    cy.intercept(
      { method: 'GET', url: apiUrl + '/us/rss/toppodcasts/limit=100/genre=1310/json' },
      { fixture: 'podcasts-from-api.json' }
    ).as('getPodcastsFromApi')
    cy.visit(appUrl)
    cy.wait('@getPodcastsFromApi')
  })

  beforeEach(() => {
    cy.getByTestId('search-input').clear()
  })

  it('Search input is empty and 3 podcasts are shown', () => {
    cy.getByTestId('podcast-list')
      .children()
      .should('have.length', 3)
      .each((_, index) => {
        cy.getByTestId('podcast-name').should('contain.text', mockPodcasts[index].name)
        cy.getByTestId('podcast-artist').should('contain.text', mockPodcasts[index].artist)
      })
    cy.getByTestId('search-input').should('exist').and('be.visible')
    cy.getByTestId('search-input')
      .should('be.empty')
      .and('have.attr', 'placeholder', 'Filter podcasts...')
    cy.getByTestId('count-badge').should('have.text', '3')
  })

  it('Type an unexisting podcast', () => {
    cy.getByTestId('search-input').type('XYZ-AA')
    cy.getByTestId('search-input').should('have.value', 'XYZ-AA')
    cy.getByTestId('count-badge').should('have.text', '0')
    cy.getByTestId('podcast-none').should('have.text', 'No podcasts to show')
  })

  it('Search a podcast by lowercase name', () => {
    cy.getByTestId('search-input').type('joe')
    cy.getByTestId('search-input').should('have.value', 'joe')
    cy.getByTestId('count-badge').should('have.text', '1')
    cy.getByTestId('podcast-list')
      .children()
      .should('have.length', 1)
      .each((_) => {
        cy.getByTestId('podcast-name').should('have.text', 'The Joe Budden Podcast')
        cy.getByTestId('podcast-artist').should('have.text', 'The Joe Budden Network')
      })
  })

  it('Search a podcast by uppercase name', () => {
    cy.getByTestId('search-input').type('FRIDAY')
    cy.getByTestId('search-input').should('have.value', 'FRIDAY')
    cy.getByTestId('count-badge').should('have.text', '1')
    cy.getByTestId('podcast-list')
      .children()
      .should('have.length', 1)
      .each((_) => {
        cy.getByTestId('podcast-name').should('have.text', 'Friday Night Karaoke')
        cy.getByTestId('podcast-artist').should('have.text', 'Friday Night Karaoke')
      })
  })

  it('Search a podcast by artist', () => {
    cy.getByTestId('search-input').type('Effect')
    cy.getByTestId('search-input').should('have.value', 'Effect')
    cy.getByTestId('count-badge').should('have.text', '1')
    cy.getByTestId('podcast-list')
      .children()
      .should('have.length', 1)
      .each((_) => {
        cy.getByTestId('podcast-name').should('have.text', 'R&B Money')
        cy.getByTestId('podcast-artist').should('have.text', 'The Black Effect and iHeartPodcasts')
      })
  })
})
