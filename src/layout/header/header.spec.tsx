import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import { Header } from './header.component'

test('renders Header component', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

  expect(screen.getByTestId('app-header')).toBeInTheDocument()
  expect(screen.getByTestId('app-title')).toHaveTextContent('Podcaster')
})
