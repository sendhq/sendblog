import React from "react";
import { HeaderLink, Header } from "./website/headerblock";
import { IonIcon } from "@ionic/react";
import GoogleMapReact from "google-map-react";
import "../components/css/main.min.css";
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoTwitter,
} from "ionicons/icons";
import { Footer } from "./website/footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const About = () => {
  return (
    <div>
      <html lang='en'>
        <HeaderLink />
        <body>
          <section id='hero' class='hero whole_hero'>
            <Header />
          </section>
          <section class='static_section container'>
            <div class='margin_center col_9 mb4 align_center'>
              <h1 class='majors mb _bold uppercased'>What we do</h1>
              <p class='mb4 about_us_talk'>
                SEND makes it easy to ship cargo to and from Africa, by managing
                the entire process &mdash; Air, Ocean, Customs clearance, Supply chain financing
                &mdash; using software, refined processes and smart people. We
                have a long term vision of enabling African trade by better
                connecting more African countries with each other and the global
                market.
              </p>
            </div>
          </section>
          <br />
          <section class='pricing_hero'>
            <div class='hero_content clearfix'>
              <div class='estimate_form'>
                <h2 class='majors mb3 weight_bold uppercased'>Contact Us</h2>
                <ul>
                  <li class='mb3 about_coy_data'>
                    <label class='m-b'>HQ</label>
                    <p>Lagos, Nigeria</p>
                  </li>
                  <li class='mb3 about_coy_data'>
                    <label class='m-b'>Support &amp; Enquiries</label>
                    <p>support@send.ng</p>
                  </li>
                  <li class='mb3 about_coy_data'>
                    <label class='m-b'>Phone</label>
                    <p>
                      <a href='https://wa.me/2349098620543'>
                        +234 (0) 909 862 0543
                      </a>
                    </p>
                  </li>
                  <li class='mb3 about_coy_data mobile_hide'>
                    <label class='m-b'>Social</label>
                    <div class='social_icons' style={{ display: "flex" }}>
                      <a
                        href='https://www.fb.me/sendhq'
                        class='color_inherit_one'
                        target='_blank'
                      >
                        {/* <ion-icon name='logo-facebook'></ion-icon> */}
                        <IonIcon icon={logoFacebook} />
                      </a>
                      <a
                        href='https://www.twitter.com/sendDelivery'
                        class='color_inherit_one'
                        target='_blank'
                      >
                        <IonIcon icon={logoTwitter} />
                        {/* <ion-icon name='logo-twitter'></ion-icon> */}
                      </a>
                      <a
                        href='https://instagram.com/sendfreight'
                        class='color_inherit_one'
                        target='_blank'
                      >
                        <IonIcon icon={logoInstagram} />
                        {/* <ion-icon name='logo-instagram'></ion-icon> */}
                      </a>
                      <a
                        href='https://www.linkedin.com/company/send-shipping'
                        class='color_inherit_one'
                        target='_blank'
                      >
                        <IonIcon icon={logoLinkedin} />
                        {/* <ion-icon name='logo-linkedin'></ion-icon> */}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{ height: "100vh", width: "100%" }} class='map_box'>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAbFzE9EPeGbozrJIKOFTvsC5dGkisCPzA",
                  }}
                  defaultZoom={11}
                  defaultCenter={{
                    lat: 10.99835602,
                    lng: 77.01502627,
                  }}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={"My Marker"}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </section>
          <Footer />
        </body>
      </html>
    </div>
  );
};

export default About;
