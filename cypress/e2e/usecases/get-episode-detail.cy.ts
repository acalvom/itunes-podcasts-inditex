import { mockEpisode } from '../mocks/episode'
import { mockPodcast } from '../mocks/podcast'

describe('Get episode detail workflow', () => {
  const appUrl = `${Cypress.env('appUrl')}`
  const apiUrl = `${Cypress.env('apiUrl')}`
  const alloriginsUrl = 'https://api.allorigins.win/get?url='

  it('Click on an episode from the list', () => {
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

    cy.visit(appUrl + '/podcast/' + mockPodcast.id + '/episode/' + mockEpisode.id)
    cy.wait('@getEpisodesFromApi')

    cy.getByTestId('episode-name').should('have.text', mockEpisode.name)
    cy.getByTestId('episode-description').should('have.text', mockEpisode.description)
    cy.getByTestId('episode-audio').should('have.attr', 'src').and('be.eq', mockEpisode.url)
    cy.getByTestId('episode-audio')
      .invoke('attr', 'src')
      .then((audiofile) => {
        const audio = new Audio(audiofile)
        audio.play()
      })
    cy.getByTestId('podcast-name').parent().click()
    cy.url().should('eq', appUrl + '/podcast/' + mockPodcast.id)
  })

  it('Back to podcast detail', () => {
    cy.getByTestId('podcast-name').parent().click()
    cy.url().should('eq', appUrl + '/podcast/' + mockPodcast.id)
  })
})
