import { mockPodcasts } from '../mocks/podcasts'

describe('List all podcasts workflow', () => {
  const appUrl = `${Cypress.env('appUrl')}`
  const apiUrl = `${Cypress.env('apiUrl')}`

  beforeEach(() => {
    cy.visit(appUrl)
  })

  it('Check caché empty', () => {
    cy.clearLocalStorage()
    cy.getAllLocalStorage().should(() => {
      expect(localStorage.getItem('podcasts')).to.be.null
      expect(localStorage.getItem('episodes')).to.be.null
      expect(localStorage.getItem('cache_on')).to.be.null
    })
  })

  it('Home fetching from API 3 podcasts', () => {
    cy.intercept(
      { method: 'GET', url: apiUrl + '/us/rss/toppodcasts/limit=100/genre=1310/json' },
      { fixture: 'podcasts-from-api.json' }
    ).as('getPodcastsFromApi')
    cy.visit(appUrl)
    cy.wait('@getPodcastsFromApi')
    cy.getByTestId('podcast-list').should('exist').and('be.visible').as('podcastList')
    cy.get('@podcastList').children().should('have.length', 3)
  })

  it('Check cache with podcasts', () => {
    cy.getAllLocalStorage().should(() => {
      expect(localStorage.getItem('podcasts')).to.equal(JSON.stringify(mockPodcasts))
      expect(localStorage.getItem('episodes')).to.be.null
      expect(localStorage.getItem('cache_on')).not.to.be.null
    })
  })

  it('Home fetching from storage', () => {
    cy.reload()
    cy.getByTestId('podcast-list').children().should('have.length', 3)
  })
})
