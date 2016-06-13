import * as React from 'react'

import Header from './Header.tsx'

const navItems = [
	"A Nav Option",
	"Another Nav Option",
	"Navigation",
	"Go To Nav",
]

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<main>
				<Header navItems={navItems} />
				<section>
				</section>
			</main>
		)
	}
}