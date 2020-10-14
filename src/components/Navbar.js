import React from 'react'
import { Link } from 'gatsby'
import logo from './img/send.svg'
import OpenOutline from 'react-ionicons/lib/IosOpenOutline'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="clearfix pt back_sky">
        <div className="column col_6 logo">
          <Link to="/">
            <img src={logo} alt="Send blog" />
            <span>blog</span>
          </Link>
        </div>

        <div className="column col_6 align_right pt1">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://send.ng"
            className="weight_bold"
          >
            Go to SEND website{' '}
            <OpenOutline className="outline-icon" color="#0747A6" />
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar
