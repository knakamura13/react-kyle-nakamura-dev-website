import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import Header from './Header';
import { Desktop, Tablet, Phone } from '../constants/MediaSizes';
import * as Styles from '../constants/Styles';


/****************
 Component Class
*****************/

export default class Error extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header title="Page Not Found"/>

				<MediaQuery minWidth={Desktop.minWidth} maxWidth={Desktop.maxWidth}>
		  			<div style={{...styles.message.main, ...styles.message.large}}>
						<label>Try changing the url path to "/home" instead.</label>
		  				<Link style={styles.link} to="/">Take me there</Link>
					</div>
				</MediaQuery>

				<MediaQuery minWidth={Tablet.minWidth} maxWidth={Tablet.maxWidth}>
		  			<p style={{...styles.message.main, ...styles.message.medium}}>
		  				Try changing the url path to "/home" instead.
						<br></br>

		  				<Link style={styles.link} to="/">Take me there</Link>
		  			</p>
				</MediaQuery>

				<MediaQuery minWidth={Phone.minWidth} maxWidth={Phone.maxWidth}>
		  			<p style={{...styles.message.main, ...styles.message.small}}>
		  				Try changing the url path to "/home" instead.
						<br></br>

		  				<Link style={styles.link} to="/">Take me there</Link>
		  			</p>
				</MediaQuery>
			</div>
		);
	}
};


/*************
 Local Styles
**************/

const styles = {
	message: {
		main: {
			textAlign: 'center',
			marginTop: '40px',
			fontFamily: Styles.fontFamilies.primary,
			display: 'flex',
			flexDirection: 'column',
		},
		large: {
		},
		medium: {
		},
		small: {
		},
	},
	link: {
		color: '#ffffff',
		margin: '20px auto 0 auto',
		backgroundColor: Styles.colors.secondaryVariants[0],
		padding: '12px',
		textDecoration: 'none',
		fontWeight: 'bold',
		borderRadius: '5px',
	}
};