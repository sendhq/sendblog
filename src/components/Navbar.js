import React from "react";
import { Link } from "gatsby";
import logo from "./img/send.svg";
import OpenOutline from "react-ionicons/lib/IosOpenOutline";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
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
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <div className='top back_sky clearfix'>
        <header>
          <div
            className='clearfix pt back_sky'
            style={{
              display: "flex",
              padding: "0rem 2rem",
              alignItems: "center",
            }}
          >
            <div className='column col_6 logo'>
              <Link to='/blog'>
                <img src={logo} alt='Send blog' />
                <span>blog</span>
              </Link>
            </div>

            <div className='column col_6 align_right pt1'>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://www.trysend.com'
                className='' >
                Go to SEND website{" "}
                <OpenOutline className='outline-icon' color='#0747A6' />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Navbar;
