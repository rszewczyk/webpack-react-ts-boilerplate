import * as React from 'react'
import { render } from 'react-dom'

// normalize css
import 'tachyons/css/tachyons.css'

import App from './components/App.tsx'

const rootEl = document.getElementById('root')
render(<App text="Hello, world" />, rootEl)

if (module.hot) {
	module.hot.accept('./components/App.tsx', function hotCallback() {
		render(<App text="Hello, world" />, rootEl)
	})
}