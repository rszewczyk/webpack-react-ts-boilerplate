import * as React from 'react'
import { partial } from 'lodash'

import * as styles from './Header.css'

export interface AppProps {
	navItems: string[]
}

interface AppState {
	navMenuToggled?: boolean
	activeItem?: number
}

export default class App extends React.Component<AppProps, AppState> {
	constructor() {
		super()

		this.toggleNavMenu = this.toggleNavMenu.bind(this)
		this.toggleSelected = this.toggleSelected.bind(this)

		this.state = {
			navMenuToggled: false,
			activeItem: 0,
		}
	}

	toggleNavMenu(e: Event): void {
		this.setState({ navMenuToggled: !this.state.navMenuToggled })
	}

	toggleSelected(activeItem: number, e: Event): void {
		if (this.state.activeItem === activeItem) {
			return
		}
		this.setState({ activeItem, navMenuToggled: false })
	}

	render() {
		const { navMenuToggled, activeItem } = this.state

		return (
			<header className={styles.header}>
				<div className={navMenuToggled ? styles.hidden : styles.headerLogo}>
					<span className={styles.logo}>HOMEPAGE</span>
				</div>
				<nav className={styles.headerNav}>
					{this.props.navItems.map((item: string, i: number) => {
						let cn = styles.navItem
						if (i === activeItem) {
							cn = `${cn} ${styles.navItemSelected}`
						} else {
							cn = navMenuToggled ? `${cn} ${styles.navItemSelectable}` : cn = `${cn} ${styles.navItemCollapsible}`
						}

						return <span style={{display: 'inline-block'}}><span title={item} key={i} className={cn} onClick={partial(this.toggleSelected, i)}>{item}</span></span>
					})}
					{navMenuToggled || <span className={styles.navShowMoreWrapper}><i onClick={this.toggleNavMenu} className={styles.navShowMore} /></span>}
					{navMenuToggled && <i onClick={this.toggleNavMenu} className={styles.navShowMoreClose} />}
				</nav>
				<div className={navMenuToggled ? styles.hidden : styles.headerMenu}>
					<i className={styles.menuIcon} />
				</div>
			</header>
		)
	}
}