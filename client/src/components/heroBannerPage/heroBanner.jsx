import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUser } from '@fortawesome/free-solid-svg-icons';
import heroVideo from '../../assets/hero/hero-banner.mp4';
import './heroBanner.css';

const HeroBanner = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted playsInline className='hero-video'>
                <source src={heroVideo} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            <div className='hero-section hero-top'>
                <div id='logo'></div>
                <div className='hero-top-side'>
                    <div className='hero-cust'>
                        <FontAwesomeIcon icon={faUser} id='icon' />
                        <p className='cust-button'>Log In</p>
                        <p className='cust-button'>Sign Up</p>
                    </div>
                    <a id='business-btn'>
                        <FontAwesomeIcon icon={faUserTie} id='icon' /> List your business
                    </a>
                </div>
            </div>

            <div className='hero-section hero-container'>
                <h1 id='hero-heading'>Your Car Deserves First-Class Treatment!</h1>
                <h2 id='hero-desc'>
                    Where every detail matter. Inside and out!
                </h2>
                <div className='search-bar-container'>
                    <input type='text' className='search-bar' placeholder='Enter your location or service' />
                    <button className='search-btn'>Search</button>
                </div>
            </div>

            <div className='hero-section'>
                <div className='services-container'>
                    <a href='#'>Tint</a>
                    <a href='#'>Wrap</a>
                    <a href='#'>Interior</a>
                    <a href='#'>Exterior</a>
                    <a href='#'>Specialty</a>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;