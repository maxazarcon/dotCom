import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    expect(screen.getByText('Max Azarcon')).toBeInTheDocument()
  })
})
