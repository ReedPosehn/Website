import React, {Component} from 'react';
import bottlePic from './art/Bottle.PNG';
import cloudPic from './art/Cloud.PNG';
import evaPic from './art/Eva.PNG';
import lofiPic from './art/Lofi.PNG';
import officePic from './art/Office.PNG';
import pinkPic from './art/Pink.PNG';
import poePic from './art/Poe.PNG';
import silentPic from './art/Silent Hill.PNG';
import treePic from './art/Tree.PNG';
import valleyPic from './art/Valley.PNG';

import './App.css';
import styles from './styling.module.css';
// Defines the Github Logo, with link
class ArtPictures extends Component  {
	
	render() {
		return (
            <div>
                <img src={bottlePic} className={styles.artPics}/>
                <img src={pinkPic} className={styles.artPics}/>
                <img src={officePic} className={styles.artPics}/>
                <img src={cloudPic} className={styles.artPics}/>
                <img src={lofiPic} className={styles.artPics}/>
                <img src={evaPic} className={styles.artPics}/>
                <img src={valleyPic} className={styles.artPics}/>
                <img src={treePic} className={styles.artPics}/>
                <img src={silentPic} className={styles.artPics}/>
                <img src={poePic} className={styles.artPics}/>
            </div>
		);
	}
}

// Displays both components
class Artwork extends Component {
	
	render() {
		return (
			<div>
			<ArtPictures/>
			</div>
		);
	}
}
export default Artwork;