import React, {Component} from 'react';
import photo from './assets/Me.jpg';
import birdsNest from './assets/MandyBirdsNest.PNG';
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
			<p style={{margin: "0px", fontSize: 15}}>© 2020 Reed Posehn.</p>
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
			<div className="home">
				<div className="Background">
					{/*<h1 className="headerImage">Homepage</h1>*/}
					<div className="row">
					<div className="leftColumn">
						<img src={photo} className={styles.myphoto}/>
						<p style={{margin: "1px", color: "whitesmoke", fontSize: 20, fontfamily: "Georgia", fontStyle: "Italic"}}>Digital art, photography, drawing, books, movies, video games.</p>
						<p className="links">Links to Github and LinkedIn</p>	 
						<div className={styles.logos}>
						<BothLogos />
						</div>
					</div>
					<div style={{margin: "50px"}}className="midColumn">
					<p style={{margin: "1px", color: "white", fontSize: 30, fontfamily: "Georgia", fontStyle: "Italic"}}>Bachelor of Science: Computer Science</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 25, fontfamily: "Georgia", fontStyle: "Italic"}}>University of Saskatchewan</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 20, fontfamily: "Georgia", fontStyle: "Italic"}}>09/2015 - 12/2019</p>
					<p style={{marginTop: "100px", marginBottom: "1px", color: "whitesmoke", fontSize: 30, fontfamily: "Georgia", fontStyle: "Italic"}}>Solvera Solutions - Application Analyst</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 20, fontfamily: "Georgia", fontStyle: "Italic"}}>04/2018 - Present</p>
					<p style={{marginTop: "50px", marginBottom: "1px", color: "whitesmoke", fontSize: 30, fontfamily: "Georgia", fontStyle: "Italic"}}>Clients</p>
					<p style={{margin: "1px", color: "whitesmoke", fontSize: 25, fontfamily: "Georgia", fontStyle: "Italic"}}>Nutrien - EtQ Developer (Desktop/Mobile Application)</p>
					</div>

					<div className="rightColumn">
						<img src={birdsNest} className={styles.birdsNest} />
						<div className="outerColBox">
							<div className="colBox">
							<p className={styles.descText}>Experienced with full stack development.</p>
							</div>
						</div>
						<div className="outerColBox">
							<div className="colBox">
							<p className={styles.descHeaderText}>Applications</p>
							<p className={styles.descText}>Android app dev<br/>Application based form-building<br/>
							Report Building and Maintenance<br/>Database Operations<br/>Administration Work<br/>Supporting clients and Business</p>
							</div>
						</div>
						<div className="outerColBox">
							<div className="colBox">
							<p className={styles.descHeaderText}>Projects and subjects I've dipped my toes in&emsp;</p>
							</div>
						</div>
						<div className="outerColBox">
							<div className="colBox">
							<p className={styles.descTextVert}>Flight Simulator<br/>Chat Room<br/>Shell<br/>Kernal alterations<br/>Web Crawler<br/>Threading<br/>Intro AI Programs<br/>
							Web Services</p>
							</div>
							<div className="colBox">
							<p className={styles.descTextVert}>Data Structures & Algorithms<br/>Computer Architecture<br/>Object Oriented Programming<br/>
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

class About extends Component {
	render () {
		return (
			<div className="Background">
					<h3>About Me</h3>
					<p style={{margin: "1px", color: "white", fontSize: 30, fontfamily: "Georgia", fontStyle: "Italic"}}>I enjoy a wide variety of different types of art, whether it be digital, photography or created on paper.</p>
					<div className={styles.artStyles}>
					<Artwork />
					</div>
					<div className="aboutColumn">
					<p style={{margin: "1px", color: "white", fontSize: 30, fontfamily: "Georgia", fontStyle: "Italic"}}>I also have a broad taste in entertainment. Here are some of my favorites.</p>
					<div className="outerColBox">
						<div className="colBox">
						<p>Books</p>
						</div>
						<div className="colBox">
						<p>Movies</p>
						</div>
						<div className="colBox">
						<p>Games</p>
						</div>
					</div>
					<div className="outerColBox">
					<div className="colBox">
						<p className={styles.descText}>The Count of Monte Cristo<br/>Catch 22<br/>Flowers for Algernon<br/>Catcher in the Rye<br/>Don Quixote<br/>Various Edgar Allen Poe<br/>Calvin and Hobbes</p>
						</div>
						<div className="colBox">
						<p className={styles.descText}>Parasite<br/>The Matrix<br/>The Lord of the Rings Trilogy<br/>Taxi Driver<br/>Requiem for a Dream<br/>Pulp Fiction<br/>Shawshank Redemption<br/>Fight Club (Sorry)</p>
						</div>
						<div className="colBox">
						<p className={styles.descText}>Left 4 Dead 2<br/>Elder Scrolls: Skyrim<br/>Shadow of the Colossus<br/>The Persona Series<br/>Final Fantasy 7<br/>GTA San Andreas<br/>Nier Automata</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Goals extends Component {
	render () {
		return (
			<div className="Background">
				<p className="goalText">I'll be using this page as a way to keep track of certain goals I have or new technologies I want to look into.<br/>
				I think I'll fragment it by year and see what I can cross off by the end of the year or what gets rolled over.</p>
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
					</div>
			</div>
		);
	}
}

export default App;
