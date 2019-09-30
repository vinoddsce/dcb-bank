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
            <div className="Welcome-component" style={{ width: "100%", height: "50%" }} >
                <header>
                    <div className="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={backgroudVideo} type="video/mp4" />
                    </video>
                    <UserActionNavbar />
                    <div>
                        <div className="main-title-section">
                            <h2 className="hp-bnr-title-1">ENABLING AND EMPOWERING</h2>
                            <p className="lead mb-0">AN ECOSYSTEM HUNGRY FOR INNOVATION</p>
                        </div>
                    </div>
                </header>

                <section class="elementor-element elementor-element-56730e5 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="56730e5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">

                </section>
                <section class="elementor-element elementor-element-254ede0 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="254ede0" data-element_type="section">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-element elementor-element-e27d3db elementor-column elementor-col-100 elementor-top-column" data-id="e27d3db" data-element_type="column">
                                <div class="elementor-column-wrap">
                                    <div class="elementor-widget-wrap">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', height: '70vh', marginLeft: '100px', paddingTop: '30px' }}>
                    {/* <ReactPlayer url="https://www.youtube.com/watch?v=fTTGALaRZoc" playing /> */}

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
                        <div class="elementor-container elementor-column-gap-extended">
                            <div class="elementor-row">
                                <div class="elementor-element elementor-element-8f8c9bf elementor-column elementor-col-50 elementor-top-column" data-id="8f8c9bf" data-element_type="column">
                                    <div class="elementor-column-wrap  elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-39e9167 elementor-widget elementor-widget-heading" data-id="39e9167" data-element_type="widget" data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">MEET OUR OTHER STAKEHOLDERS</h2>		</div>
                                            </div>
                                            <div class="elementor-element elementor-element-6bdc32f elementor-widget elementor-widget-text-editor" data-id="6bdc32f" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-text-editor elementor-clearfix"><p>We are building a culture of innovation through collaboration with a network of investors, mentors, service providers, ecosystem enablers and the government.</p></div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-99030b9 elementor-widget elementor-widget-button" data-id="99030b9" data-element_type="widget" data-widget_type="button.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-button-wrapper">
                                                        <a href="" class="elementor-button-link elementor-button elementor-size-sm" role="button" tabindex="-1">
                                                            <span class="elementor-button-content-wrapper">
                                                                <span class="elementor-button-text">DISCOVER MORE</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="elementor-element elementor-element-f203465 elementor-column elementor-col-50 elementor-top-column" data-id="f203465" data-element_type="column">
                                    <div class="elementor-column-wrap  elementor-element-populated">
                                        <div class="elementor-widget-wrap">
                                            <div class="elementor-element elementor-element-e55b6d7 elementor-widget elementor-widget-premium-img-gallery" data-id="e55b6d7" data-element_type="widget" data-widget_type="premium-img-gallery.default">
                                                <div class="elementor-widget-container">

                                                    <div id="" class="premium-img-gallery premium-img-gallery-fitRows">

                                                        <div class="premium-gallery-container js-isotope" >
                                                            <div class="premium-gallery-item elementor-repeater-item-1948068 category-1" >
                                                                <div class="pa-gallery-img default" onclick="">
                                                                    <div class="pa-gallery-img-container zoomin">
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholder-01.png" class="pa-gallery-image" alt="Stackholder-01" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-08.png" class="pa-gallery-image" alt="Stackholde-08" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-02.png" class="pa-gallery-image" alt="Stackholde-02" />
                                                                    </div>
                                                                </div>
                                                                <div class="pa-gallery-img default" onclick="">
                                                                    <div class="pa-gallery-img-container zoomin">
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-03.png" class="pa-gallery-image" alt="Stackholde-03" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-05.png" class="pa-gallery-image" alt="Stackholde-05" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-04.png" class="pa-gallery-image" alt="Stackholde-04" />
                                                                    </div>
                                                                </div>
                                                                <div class="pa-gallery-img default" onclick="">
                                                                    <div class="pa-gallery-img-container zoomin">
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-03.png" class="pa-gallery-image" alt="Stackholde-03" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-06.png" class="pa-gallery-image" alt="Stackholde-06" />
                                                                        <img src="https://t-hub.co/wp-content/uploads/2019/07/Stackholde-07.png" class="pa-gallery-image" alt="Stackholde-07" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <HomePageNewsSection />
            </ div >
        );
    }
}

export default Welcome;