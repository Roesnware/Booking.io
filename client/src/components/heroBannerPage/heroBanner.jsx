import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUser } from '@fortawesome/free-solid-svg-icons';
import heroVideo from '../../assets/hero/hero-banner.mp4'; 
import './heroBanner.css';

const HeroBanner = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted playsInline className="hero-video">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='hero-section'>
                <div className='hero-top'>
                    <div>
                        <div id='logo'></div>
                    </div>
                    <div className='hero-top-side'>
                        <div className='hero-cust'>
                            <FontAwesomeIcon icon={faUser} id='icon' />
                            <p id='cust-buttons'>Log In</p>
                            <p id='cust-buttons'>Sign Up</p>
                        </div>
                        <a id='business-btn'>
                            <FontAwesomeIcon icon={faUserTie} id='icon' /> List your business
                        </a>
                    </div>
                </div>
            </div>
            <div className='hero-section'>
                mid
            </div>
            <div className='hero-section'>
                bottom nav
            </div>
        </div>
    );
};

export default HeroBanner;