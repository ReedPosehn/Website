import React, {Component} from 'react';
import logo from './logo.svg';
import photo from './assets/Me.jpg';
import birdsNest from './assets/MandyBirdsNest.PNG';
import BothLogos from './LogoComponents.js';

import Styles from './App.css';
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
			<Main />
			 </header>
			<div className="footer">
			<div className="footerText">
			<p style={{margin: "0px", fontSize: 15}}>© 2020 Reed Posehn.</p>
			</div>
			</div>
		</div>
	  );
	}

}

const Navigation = () => (
				<nav>
					<ul>
						<li><NavLink to='/'>Home</NavLink></li>
					</ul>
				</nav>
			);


const Main = () => (
				<Switch>
					<Route exact path='/' component={Home}></Route>
				</Switch>
			);

class Home extends Component {
	render () {
		return (
			<div className="whole">
			<div className="home">
				<div className="Main">
					<h1 className="headerImage">Homepage</h1>
					<div className="row">
					<div className="leftColumn">
						<img src={photo} className="myphoto" />
						<p className="links">Links to Github and LinkedIn</p>	 
						<div className="logos">
						<BothLogos />
						</div>
					</div>
					<div style={{margin: "50px"}}className="midColumn">
					<p style={{margin: "1px", color: "white", fontSize: 30}}>Bachelor of Science: Computer Science</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 25}}>University of Saskatchewan</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 20}}>09/2015 - 12/2019</p>
					<p style={{marginTop: "100px", marginBottom: "1px", color: "whitesmoke", fontSize: 30}}>Solvera Solutions - Application Analyst</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 20}}>04/2018 - Present</p>
					<p style={{marginTop: "50px", marginBottom: "1px", color: "whitesmoke", fontSize: 30}}>Clients</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 25}}>Nutrien - EtQ Developer (Desktop/Mobile Application)</p>
					</div>

					<div className="rightColumn">
						<img src={birdsNest} className="birdsNest" />
						<div className="rightColBox">
							<div className="colBox">
							<p style={{paddingTop: "10px", fontSize: 15, color: "black", fontWeight: "bold"}}>Primary Skills:</p>
							</div>
							<div className="colBox">
							<p style={{paddingTop: "10px", fontSize: 15, color: "black", fontweight: "bold", paddingRight: 5}}>Python, Java, C, C++, C#,HTML, CSS, JavaScript, SQL</p>
							</div>
						</div>
						<div className="rightColBox">
							<div className="colBox">
							<p style={{paddingTop: "10px", fontSize: 15, color: "black", fontWeight: "bold"}}>Applications:</p>
							</div>
							<div className="colBox">
							<p style={{paddingTop: "10px", fontSize: 15, color: "black", fontweight: "bold", paddingRight: 5}}>Android app dev<br/>Application based form-building<br/>Cognos Report Building<br/>
							Commandline and IDE<br/>Administration<br/>Supporting clients and Business</p>
							</div>
						</div>
						<div className="rightColBox">
							<div className="colBox">
							<p style={{paddingTop: "10px", marginBottom: "1px", fontSize: 15, color: "black", fontWeight: "bold"}}>School Projects&emsp;&emsp;&emsp;Subjects Studied:</p>
							</div>
						</div>
						<div className="rightColBox">
							<div className="colBox">
							<p style={{marginTop: "1px", fontSize: 15, color: "black"}}>Flight Simulator<br/>Chat Room<br/>Shell<br/>Kernal alterations<br/>Web Crawler<br/>Threading<br/>Intro AI Programs<br/>
							Web Services</p>
							</div>
							<div className="colBox">
							<p style={{marginTop: "1px", fontSize: 15, color: "black", fontweight: "bold", paddingRight: 5}}>Data Structures & Algorithms<br/>Computer Architecture<br/>Object Oriented Programming<br/>
							Operating Systems<br/>Databases<br/>Software Engineering<br/>Artificial Intelligence<br/>Web Programming<br/>GUIs<br/>Mobile and Cloud</p>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default App;
