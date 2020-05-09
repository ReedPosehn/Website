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
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }
  
  recentFluc(event) {
	  this.setState
  }*/
  
  render() {
	  return (
		<div className="App">
			<header className="App-header">
			<Navigation />
			<Main />
			{/*<form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Enter your name: </label>
				<label htmlFor="name">Enter your name: </label>
				<input
				  id="name"
				  type="text"
				  value={this.state.name}
				  onChange={this.handleChange}
				/>
				<button type="submit">Submit</button>
			  </form>
			  <p>{this.state.greeting}</p>*/}
			 </header>
			 {/*<div className="Main">
			 <img src={photo} className="myphoto" />
			 <img src={logo} className="App-logo" alt="logo" />
			<p>
				In testing!
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Learn React
			</a>
			 </div>*/}
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
						<li><NavLink to='/recentFluc'>Recent Fluctuations</NavLink></li>
					</ul>
				</nav>
			);


const Main = () => (
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/recentFluc' component={RecentFluctuations}></Route>
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
						{/*<img src={logo} className="App-logo" alt="logo" />*/}
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
					{/*<div className="midColumn">
					<img src={github} className="githubLogo" />
					<img src={linkedIn} className="linkedInLogo" />
					</div>*/}
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
							<p style={{marginTop: "1px", fontSize: 15, color: "black"}}>Flight Simulator<br/>Chat Room<br/>Shell<br/>Kernal alterations<br/>Web Crawler<br/>Threading<br/>Basic AI Implementation<br/>
							Web Services</p>
							</div>
							<div className="colBox">
							<p style={{marginTop: "1px", fontSize: 15, color: "black", fontweight: "bold", paddingRight: 5}}>Data Structures & Algorithms<br/>Computer Architecture<br/>Object Oriented Programming<br/>
							Operating Systems<br/>Databases<br/>Software Engineering<br/>Artificial Intelligence<br/>Web Programming<br/>GUIs<br/>Mobile and Cloud</p>
							</div>
						</div>
					{/*<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					>
					Learn React
					</a>*/}
					</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
			
class RecentFluctuations extends Component {
	render () {
		return (
			<div className='recentFluc'>
				<h1 className='headerImage'>Recent Highs and Lows</h1>
				<div className='stockTable'>
					<div className='stockRow'>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
					</div>
					<div className='stockRow'>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
						<div className="stockColumn">
							<p>test</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
