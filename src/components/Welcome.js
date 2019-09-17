import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './Welcome.css';
import HomePageNewsSection from './HomePageNewsSection';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';

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
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '70vh', marginLeft: '100px', paddingTop: '30px' }}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=fTTGALaRZoc" playing />

                </div>
                <marquee style={{ color: '#ffffff' }}>Effective 1st Sept'19 , TDS of 2% is applicable on cash withdraw exceeding Rs.1 Cr in a financial year. Read more on Click Here</marquee>
                {/* <img src={banking} /> */}
                <h1>About</h1>
                <p>Despite being a cheaper mode of transportation, people are preferring a private car over public transportation.</p>
                <div style={{ marginRight: '750px' }}>
                    <h2 style={{ color: '#ffffff' }}>Trending News</h2>
                </div>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>{item.button}</button>
                            </div>
                            {/* <section>
                                <img src={item.userProfile} alt={item.user} />
                                <span>
                                    Posted by <strong>{item.user}</strong>
                                </span>
                            </section> */}
                        </div>
                    ))}
                </Slider>
                <HomePageNewsSection />
            </ div >
        );
    }
}

export default Welcome;