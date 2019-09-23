import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './Welcome.css';
import HomePageNewsSection from './HomePageNewsSection';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';

import backgroudVideo from '../assets/background.mov';

import UserActionNavbar from './UserActionNavbar';

const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Welcome-component" style={{ width: "100%", height: "100%" }} >
                <header>
                    <div className="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={backgroudVideo} type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <UserActionNavbar />
                                <h1 className="display-3">Video Header</h1>
                                <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '70vh', marginLeft: '100px', paddingTop: '30px' }}>
                    {/* <ReactPlayer url="https://www.youtube.com/watch?v=fTTGALaRZoc" playing /> */}

                </div>

                <section className="secOne" data-element_type="section">
                    <div className="divOne">
                        <div className="elementor-row">
                            <div className="secOneContainer">
                                <div className="elementor-column-wrap">
                                    <div className="elementor-widget-wrap">
                                        <div className="secOneHeader">
                                            <h2 className="elementor-heading-title">
                                                WHAT IS IDEA EXPRESS?
                                            </h2>
                                        </div>
                                        <div className="element-text">
                                        <p className="text-content">At T-Hub, we pioneer India’s leading innovation ecosystem. We synergise startups, corporations, governments, academia and investors to drive transformative change. Our innovation ecosystem stands firmly on seven key pillars bridging the gap between visionary entrepreneurs and corporates seeking the next big idea, and everyone in between.</p>
                                        </div>
                                        <section className="box-section">

                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ div >
        );
    }
}

export default Welcome;