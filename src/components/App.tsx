import * as React from 'react'
import { appHeader } from './App.css'

export interface AppProps { text: string }

export default class App extends React.Component<AppProps, {}> {
	render() {
		return (
			<div>
				<p className={appHeader}>{this.props.text}</p>
			</div>
		)
	}
}