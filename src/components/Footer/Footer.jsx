import React from 'react'
import "./Footer.css"
import pawImage from "../../img/paw.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__content">
            <div className="footer__content--heading">
            <a href="/" className="footer__heading__link">
                {/* <img src={pawImage} alt="paw logo" className="footer__content--image" /> */}
                <h1 className="navbar__logo--text">Get in touch</h1>
            </a>
            </div>
            <div className="footer__content--icons">
                <a href="" className="footer__icon--link">
                    <FacebookIcon fontSize='40' className='footer__icon'/>
                </a>
                <a href="" className="footer__icon--link">
                <TwitterIcon fontSize='40' className='footer__icon'/>
                </a>
                <a href="" className="footer__icon--link">
                <InstagramIcon fontSize='40' className='footer__icon'/>
                </a>
                <a href="" className="footer__icon--link">
                <EmailOutlinedIcon fontSize='40' className='footer__icon'/>
                </a>
            </div>
        </div>

        <div className="footer__copy">
            <div className="footer__copy--cont">
                <div className="footer__copy--left">
                    <p className="footer__copy--text">&#169; Perff</p>
                </div>
                <div className="footer__copy--center">
                    <p className="footer__copy--text">Terms & Conditions</p>
                </div>
                <div className="footer__copy--right">
                    <p className="footer__copy--text">Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer