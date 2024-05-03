import { mockEpisode } from '../mocks/episode'
import { mockEpisodes } from '../mocks/episodes'
import { mockPodcast } from '../mocks/podcast'

describe('Get podcast by id workflow', () => {
  const appUrl = `${Cypress.env('appUrl')}`
  const apiUrl = `${Cypress.env('apiUrl')}`
  const alloriginsUrl = 'https://api.allorigins.win/get?url='

  before(() => {
    cy.clearLocalStorage()
    cy.intercept(
      {
        method: 'GET',
        url:
          alloriginsUrl +
          encodeURIComponent(apiUrl + '/us/rss/toppodcasts/limit=100/genre=1310/json'),
      },
      { fixture: 'podcasts-from-api.json' }
    ).as('getPodcastsFromApi')

    cy.visit(appUrl)
    cy.wait('@getPodcastsFromApi')
  })

  after(() => {
    cy.clearLocalStorage()
  })

  it('Type an unexisting podcast in the url: 400 error', () => {
    cy.intercept(
      {
        method: 'GET',
        url:
          alloriginsUrl +
          encodeURIComponent(
            apiUrl + '/lookup?id=does-not-exist&media=podcast&entity=podcastEpisode&limit=1000'
          ),
      },
      { statusCode: 400, fixture: 'episodes-not-found.json' }
    ).as('getEpisodes400Error')

    cy.visit(appUrl + '/podcast/does-not-exist')
    cy.wait('@getEpisodes400Error')
    cy.getByTestId('no-episodes-found').should('have.text', 'No episodes to show')
    cy.getByTestId('app-title').click()
    cy.url().should('eq', appUrl + '/')
  })

  it('Cache for podcast is empty', () => {
    cy.getAllLocalStorage().should(() => {
      expect(localStorage.getItem('podcast_' + mockPodcast.id)).to.be.null
      expect(localStorage.getItem('episodes_from_' + mockPodcast.id)).to.be.null
    })
  })

  it('Click on a podcast from the list', () => {
    cy.intercept(
      {
        method: 'GET',
        url:
          alloriginsUrl +
          encodeURIComponent(
            `${apiUrl}/lookup?id=${mockPodcast.id}&media=podcast&entity=podcastEpisode&limit=1000`
          ),
      },
      { fixture: 'episodes-from-api.json' }
    ).as('getEpisodesFromApi')

    cy.getByTestId('podcast-list').children().first().click()
    cy.url().should('eq', appUrl + '/podcast/' + mockPodcast.id)
    cy.wait('@getEpisodesFromApi')

    cy.getByTestId('podcast-image').should('be.visible')
    cy.getByTestId('podcast-image').should('have.attr', 'src').and('be.eq', mockPodcast.image)
    cy.getByTestId('podcast-image').should('have.attr', 'alt').and('be.eq', mockPodcast.name)
    cy.getByTestId('podcast-name').should('have.text', mockPodcast.name)
    cy.getByTestId('podcast-artist').should('contain.text', mockPodcast.artist)
    cy.getByTestId('podcast-description').should('have.text', mockPodcast.description)

    cy.getByTestId('episode-grid').children().should('have.length', 201)
    cy.getByTestId('episode-grid').children().first().should('contain.text', 'TitleDateDuration')

    cy.getByTestId('podcast-name').parent().click()
    cy.url().should('eq', appUrl + '/podcast/' + mockPodcast.id)
  })

  it('Podcast and episodes stored on  cache', () => {
    cy.getAllLocalStorage().should(() => {
      expect(localStorage.getItem('podcast_' + mockPodcast.id)).not.to.be.null
      expect(localStorage.getItem('podcast_' + mockPodcast.id)).to.equal(
        JSON.stringify(mockPodcast)
      )
      expect(localStorage.getItem('episodes_from_' + mockPodcast.id)).not.to.be.null
      expect(localStorage.getItem('episodes_from_' + mockPodcast.id)).to.equal(
        JSON.stringify(mockEpisodes)
      )
    })
  })

  it('Navigate to episode detail', () => {
    cy.getByTestId('episode-grid').children().last().click()
    cy.url().should('eq', appUrl + '/podcast/' + mockPodcast.id + '/episode/' + mockEpisode.id)
  })
})
