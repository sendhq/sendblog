import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import './custom.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="myFooter">
        <div className="content container">
        <div style={{ maxWidth: '100vw', borderBottom:'1px solid rgba(255,255,255,.2)', paddingBottom:40 }} className="columns">
          <div className="column is-6"> 
            <h1 style={{ color: 'white'}}>We're here to help</h1>
          </div>
          <div className="column is-6"> 
            <p className="light-text">Contact our support team anytime. You can also ask us for the scores of a football match, if that's your thing.</p>
            <div style={{marginTop:30}}>
            <strong className="light-text">+234 909 862 0543</strong> <br />
            <strong className="light-text">support@send.ng</strong>     
            </div>
                 
          </div>
        </div>
        </div>

        <div className="content ">
          <div className="container  has-text-white-ter">
           <div style={{ maxWidth: '100vw',  borderBottom:'1px solid rgba(255,255,255,.2)', }} className="columns">
            <div className="column is-6">
              <div className="container">
              <img alt="Send logo" src={logo} style={{width:100}} />
              <p className="send">SEND is a digital freight forwarder and customs broker for Africa. We manage the entire process of shipping freight by air and ocean, including customs clearance and final delivery — using software to provide instant quotes, document management, cost transparency and control across your supply chain.</p>
              <div className="column is-4 social">
                <a  rel="noopener noreferrer" target="_blank"  title="facebook" href="https://www.facebook.com/sendhq">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a  rel="noopener noreferrer" target="_blank"  title="twitter" href="https://twitter.com/sendDelivery">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a  rel="noopener noreferrer" target="_blank"  title="instagram" href="https://instagram.com/send.ng">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a  rel="noopener noreferrer" target="_blank"  title="linkedin" href="https://www.linkedin.com/company/send-freight">
                  <img
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              </div>
            </div>
            <div  className="column is-2"></div>
            <div className="column is-4">
              <div  style={{ maxWidth: '100vw' }} className="columns">
                    <div className="column is-6">
                      <p className="nav-section-header">Company</p>
                      <p><a className="navbar-button"  rel="noopener noreferrer" href="https://www.send.ng/about.html" target="_blank" >About</a></p>
                      <p> <a className="navbar-button"  rel="noopener noreferrer" href="https://blog.send.ng" >Blog</a></p>
                      <p><a className="navbar-button"  rel="noopener noreferrer" href="https://www.send.ng/cookies.html" target="_blank" >Cookies</a></p>
                     <p> <a className="navbar-button"  rel="noopener noreferrer" href="https://www.send.ng/privacy.html" target="_blank">Privacy Policy</a></p>
                    </div>
                    <div className="column is-6">
                      <p className="nav-section-header">Get Started</p>
                      <p><a className="navbar-button"   rel="noopener noreferrer" href="mailto:support@send.ng" target="_blank" >Contact</a></p>
                      <p><a className="navbar-button"   rel="noopener noreferrer" href="https://freight.send.ng/login" target="_blank" >Business Login</a></p>
                    </div>
              </div>
              </div>
             </div>
            <p className="copyright">&copy;{`${new Date().getFullYear()} SEND. All Rights Reserved. Copyright for all brand logos belong to respective owners.`}</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
