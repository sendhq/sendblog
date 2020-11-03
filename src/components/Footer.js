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
import IosSettings from 'react-ionicons/lib/IosSettings'

const Footer = class extends React.Component {
  state = {
    email: '',
    loading: false,
  }

  subscribeToNewsLetter = () => {
    const { email } = this.state
    const data = {
      list_ids: ['65aa9a8a-b21b-4037-abc6-428bb69bf647'],
      contacts: [
        {
          email,
        },
      ],
    }
    const auth = `Bearer ${process.env.GATSBY_SENDGRID_API_KEY}`

    fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        Authorization: auth,
      },
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({ submitted: true, email: '', loading: false })
      })
      .catch((error) => {
        this.setState({ error: error, loading: false })
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    this.subscribeToNewsLetter()
  }
  render() {
    return (
      <div>
        <div className="newsletter_box contain">
          <h3 className="color_hite">Sign Up for Newsletters</h3>
          <p className="mb3">This is where you get the scoop in your inbox!</p>

          <form
            onSubmit={this.handleSubmit}
            className="clearfix col_7 margin_center m-b"
          >
            <div className="clearfix">
              <div className="col_8 column">
                <input
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="column col_4">
                <button
                  disabled={this.state.loading}
                  type="submit"
                  className="btn btn_gree"
                >
                  {this.state.loading ? (
                    <IosSettings color="white" rotate={true} fontSize="15px" />
                  ) : (
                    <p>Submit</p>
                  )}
                </button>
              </div>
            </div>
            {this.state.submitted && (
              <p className="newsletter_success">
                Thank you for subscribing to our newsletter
              </p>
            )}
          </form>

          <IosBoatOutline color="white" className="icon" fontSize="60px" />
          <IosPlane color="white" className="plane icon" fontSize="60px" />
        </div>

        <footer className="color_white">
          <div className="margin_center container clearfix main_footer">
            <div className="col_6 column">
              <h4 className="color_white mb">About Us</h4>
              <p className="col_10">
                SEND is a digital freight forwarder and customs broker for
                Africa. We manage the entire process of shipping freight by air
                and ocean, including customs clearance and final delivery
                &mdash; using software to provide instant quotes, document
                management, cost transparency and control across your supply
                chain.
              </p>
            </div>

            <div className="col_6 column align_right">
              <div className="btns_social mb">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="facebook"
                  href="https://www.facebook.com/sendhq"
                >
                  <LogoFacebook className="social_icons" color="white" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="facebook"
                  href="https://twitter.com/sendDelivery"
                >
                  <LogoTwitter className="social_icons" color="white" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="facebook"
                  href="https://instagram.com/send.ng"
                >
                  <LogoInstagram className="social_icons" color="white" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/send-freight"
                >
                  <LogoLinkedIn className="social_icons" color="white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bottom_footer">
            <div className="margin_center container small">
              <span className="mbr">
                &copy; Copyright 2020 SEND. All rights reserved
              </span>
              &#8226;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.send.ng/privacy.html"
              >
                Privacy
              </a>
              &#8226;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.send.ng/cookies.html"
              >
                Cookies
              </a>
            </div>
          </div>
        </footer>

        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
      </div>
    )
  }
}

export default Footer
