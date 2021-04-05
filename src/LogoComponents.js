import React, {Component} from 'react';
import github from './assets/GithubLogo.png';
import linkedIn from './assets/LinkedInLogo.png';

import './App.css';
import styles from './styling.module.css';
// Defines the Github Logo, with link
class GithubLogo extends Component  {
	handleClick() {
		window.open("https://github.com/ReedPosehn");
	}
	
	render() {
		return (
			<img src={github} className={styles.githubLogo} onClick={this.handleClick}/>
		);
	}
}
// Defines the LinkedInLogo, with link
class LinkedInLogo extends Component  {
	handleClick() {
		window.open("https://ca.linkedin.com/in/reedposehn");
	}
	
	render() {
		return (
			<img src={linkedIn} className={styles.linkedInLogo} onClick={this.handleClick}/>
		);
	}
}

// Displays both components
class BothLogos extends Component {
	
	render() {
		return (
			<div>
			<GithubLogo/>
			<LinkedInLogo/>
			</div>
		);
	}
}
export default BothLogos;