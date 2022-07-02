import React, {Component} from 'react';
import photo from './assets/Me.jpg';
import bridgePhoto from './art/Bridge.PNG';
import BothLogos from './LogoComponents.js';
import Artwork from './Artwork.js';

import styles from './styling.module.css'; 
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
	  return (
		<div className="App">
			<header className="App-header">
			<Navigation />
			<MainPage />
			 </header>
			<div className="footer">
			<div className="footerText">
			<p style={{margin: "0px", fontSize: 15}}>2020- Reed Posehn.</p>
			</div>
			</div>
		</div>
	  );
	}

}

const Navigation = () => (
				<nav className="MainNav">
					<ul>
						<li><NavLink to='/'>Home</NavLink></li>
						<li><NavLink to='/About'>About</NavLink></li>
						<li><NavLink to='/Goals'>Goals</NavLink></li>
					</ul>
				</nav>
			);


const MainPage = () => (
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/About' component={About}></Route>
					<Route exact path='/Goals' component={Goals}></Route>
				</Switch>
			);

class Home extends Component {
	render () {
		return (
			<div className="whole">
				<img src={bridgePhoto} style={{width:"100%", height:"500px", verticalAlign:"bottom"}} />
			<div className="home">
				<div className="Background">
					<div className="row">
					<div className="leftColumn">
						<img src={photo} className={styles.myphoto}/>
						<p className="achieveText" style={{fontSize:20}}>Digital art, photography, drawing, books, movies, video games.</p>
						<p className="links">Links to Github and LinkedIn</p>	 
						<div className={styles.logos}>
						<BothLogos />
						</div>
					</div>
					<div style={{margin: "50px"}}className="midColumn">
					<p className="achieveText" style={{fontSize:30}}>Bachelor of Science: Computer Science</p>
					<p className="achieveText" style={{fontSize:25}}>University of Saskatchewan</p>
					<p className="achieveText" style={{fontSize:20}}>09/2015 - 12/2019</p>
					<p className="achieveText" style={{fontSize:30, marginTop: "100px"}}>Solvera Solutions - Application Analyst</p>
					<p className="achieveText" style={{fontSize:20}}>04/2018 - Present</p>
					<p className="achieveText" style={{fontSize:30, marginTop: "50px"}}>Clients</p>
					<p className="achieveText" style={{fontSize:20}}>Nutrien - EtQ Developer (Desktop/Mobile Application)</p>
					</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

class About extends Component {
	render () {
		return (
			<div className="Background">
					<h3 style={{fontFamily: "Georgia", fontStyle: "Italic"}}>About Me</h3>
					<p className="achieveText" style={{fontSize:30}}>I enjoy a wide variety of different types of art, whether it be digital, photography or created on paper.</p>
					<div className={styles.artStyles}>
					<Artwork />
					</div>
			</div>
		);
	}
}

class Goals extends Component {
	render () {
		return (
			<div className="Background">
					<div className="goalDiv">
					<p className="goalYear">
						2021
					</p>
					<p className="goalText">
						Gain proficiency in the MERN stack (see how it compares to LAMP), and React in particular.<br/>
						Use more .NET development. Would be nice to become acquainted with all the differences C# has to Java.<br/>
						Look for more projects to build involving web development.<br/>
						Look into game development using Unity.<br/>
						Take a look at open source projects like Linux, Bitcoin, React etc.<br/>
						Stay fresh on algorithms and leetcode.
					</p>
					<p className="goalYear">
						2022
					</p>
					<p className="goalText">
						Spend at least an hour or two a week on programming related material to stay fresh. Focus for this year on react, mongo, shell scripting.
					</p>
					</div>
			</div>
		);
	}
}

export default App;
