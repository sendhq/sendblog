import React from 'react'
import './css/fonts.css'
import './custom.css'
import './css/reset.css'
import './css/style.css'
import IosPlane from 'react-ionicons/lib/IosPlaneOutline'
import IosBoatOutline from 'react-ionicons/lib/IosBoatOutline'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedin'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

const Footer = class extends React.Component {
  subscribeToNewsLetter = () => {
    console.log("Here to subscribe")
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.subscribeToNewsLetter()
  }
  render() {
    return (
      <div>
        <div className="newsletter_box colr_white">
                <h3 className="color_hite">Sign Up for News letters</h3>
                <p className="mb3">This is where you get the scoop in your inbox!</p>

                <form onSubmit={this.handleSubmit} className="clearfix col_7 margin_center m-b">
                   <div className="col_8 column">
                     <input type="text" placeholder="Email Address" />
                     </div>
                    <div className="column col_4">
                        <button type="submit" className="btn btn_gree" > Submit </button>
                    </div>
                </form>
               
                <IosBoatOutline color="white" className="icon" fontSize="60px" />
                <IosPlane color="white" className="plane icon" fontSize="60px" />
            </div>
            <footer className="color_white">
            <div className="margin_center container clearfix main_footer">
                <div className="col_6 column">
                    <h4 className="color_white mb">About Us</h4>
                    <p className="col_10">SEND is a digital freight forwarder and customs broker for Africa. We manage the entire process of shipping freight by air and ocean, including customs clearance and final delivery &mdash; using software to provide instant quotes, document management, cost transparency and control across your supply chain.</p>
                </div>

                <div className="col_6 column align_right">
                    <div className="btns_social mb">
                        <a rel="noopener noreferrer" target="_blank"  title="facebook" href="https://www.facebook.com/sendhq">
                        <LogoFacebook className="social_icons" color="white" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank"  title="facebook" href="https://twitter.com/sendDelivery">
                        <LogoTwitter className="social_icons" color="white" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank"  title="facebook" href="https://instagram.com/send.ng">
                         <LogoInstagram className="social_icons" color="white" />
                        </a>
                        <a rel="noopener noreferrer" target="_blank"  href="https://www.linkedin.com/company/send-freight">
                        <LogoLinkedIn className="social_icons" color="white" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="bottom_footer">
                <div className="margin_center container small">
                    <span className="mbr">&copy; Copyright 2020 SEND. All rights reserved</span>
                    &#8226;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.send.ng/privacy.html">Privacy</a>
                    &#8226;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.send.ng/cookies.html">Cookies</a>
                </div>
            </div>
        </footer>

      </div>
    )
  }
}

export default Footer
