import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import logo from '../assets/logo-white.png';
import { Desktop, Tablet, Phone } from '../constants/MediaSizes';
import * as Styles from '../constants/Styles';


/****************
 Component Class
*****************/

/* A top-positioned header view with a logo and title */
export default class Header extends Component {
	render() {
		return (
			<div>
				<MediaQuery minWidth={Desktop.minWidth} maxWidth={Desktop.maxWidth}>
					<div style={{...styles.header.main, ...styles.header.large}}>
						{/* Logo */}
						<a style={{...styles.logo.main, ...styles.logo.large}} href="/">
							<img style={{...styles.logo.main, ...styles.logo.large}} src={logo} alt="Logo"/>
						</a>

						{/* Page title */}
						<a style={{...styles.title.main, ...styles.title.large}} href="/">{this.props.title}</a>
					</div>
				</MediaQuery>

				<MediaQuery minWidth={Tablet.minWidth} maxWidth={Tablet.maxWidth}>
					<div style={{...styles.header.main, ...styles.header.medium}}>
						{/* Logo */}
						<a style={{...styles.logo.main, ...styles.logo.medium}} href="/">
							<img style={{...styles.logo.main, ...styles.logo.medium}} src={logo} alt="Logo"/>
						</a>

						{/* Page title */}
						<a style={{...styles.title.main, ...styles.title.medium}} href="/">{this.props.title}</a>
					</div>
				</MediaQuery>

				<MediaQuery minWidth={Phone.minWidth} maxWidth={Phone.maxWidth}>
					<div style={{...styles.header.main, ...styles.header.small}}>
						{/* Logo */}
						<a style={{...styles.logo.main, ...styles.logo.small}} href="/">
							<img style={{...styles.logo.main, ...styles.logo.small}} src={logo} alt="Logo"/>
						</a>

						{/* Page title */}
						<a style={{...styles.title.main, ...styles.title.small}} href="/">{this.props.title}</a>
					</div>
				</MediaQuery>
			</div>
		);
  	}
}


/*************
 Local Styles
**************/

const styles = {
	header: {
		main: {
			backgroundColor: Styles.colors.primary,
			margin: '-8px',
			display: 'flex',
			zIndex: '99999',
			textAlign: 'center',
			boxShadow: '0px 2px 5px #00000050',
			textShadow: '2px 2px 5px #00000050',
			justifyContent: 'center',
			flexDirection: 'column',
		},
		large: {
			height: '140px',
		},
		medium: {
			height: '120px',
			fontSize: '14px',
		},
		small: {
			height: '45px',
			fontSize: '12px',
			paddingTop: '8px',
			flexDirection: 'row',
		}
	},
	logo: {
		main: {
			margin: '0 auto 0 auto',
			height: '50px',
			width: '50px',
		},
		large: {
			marginBottom: '5px',
		},
		medium: {
			marginBottom: '5px',
		},
		small: {
			height: '30px',
			width: '30px',
			position: 'absolute',
			top: '5px',
			left: '5px',
		}
	},
	title: {
		main: {
			textDecoration: 'none',
			color: Styles.colors.onPrimary,
			fontSize: Styles.fontSizes.pageTitle,
			fontFamily: Styles.fontFamilies.primary,
		},
		large: {},
		medium: {},
		small: {
			marginTop: '3px',
		}
	}
};