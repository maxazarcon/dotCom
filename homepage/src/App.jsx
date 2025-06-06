import { useState } from 'react'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'

export default function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <button
          aria-label="Toggle dark mode"
          className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-800"
          onClick={() => setDark(!dark)}
        >
          {dark ? '☀️' : '🌙'}
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-bold md:text-6xl mb-4">Max Azarcon</h1>
          <p className="mb-1">Software developer building for the web.</p>
          <p className="mb-4">Loves clean design and great UX.</p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
