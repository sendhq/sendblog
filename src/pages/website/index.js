import React, { useEffect, useState } from "react";
import { withPrefix } from "gatsby";
import { IonIcon } from "@ionic/react";
import { Helmet } from "react-helmet";
import { isEmail } from "../../../utils/methods";
import {
  laptopOutline,
  menuSharp,
  closeOutline,
  airplaneOutline,
  shieldOutline,
} from "ionicons/icons";
import "../../components/css/main.min.css";

import ShipmentsImg from "../../components/img/shipments.png";
import VanOutlineImg from "../../components/img/van_outline.svg";
import VesselsImg from "../../components/img/vessel.svg";
import TruckImg from "../../components/img/truck.svg";
import ChartImg from "../../components/img/chart.svg";
import { Header, HeaderLink } from "./headerblock";
import { Footer } from "./footer";

// eslint-disable
const WebsitePage = () => {
  const [email, setEmail] = useState();
  const frontChatConfig = {
    chatId: "6d8da59cc3a54b72d42074dd08d7fc60",
    useDefaultLauncher: true,
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    if (form) {
      const validity = form.checkValidity();
      if (validity) {
        const email = form.getElementsByTagName("input")[0].value;
        const isEmailValid = isEmail(email);
        if (!isEmailValid) {
          form
            .getElementsByTagName("input")[0]
            .setCustomValidity("Wrong email format");
          return setTimeout(
            () => form.getElementsByTagName("input")[0].setCustomValidity(""),
            3000
          );
        }
        window.location.href = `https://app.trysend.com/register?email=${email}`;
      } else {
        form.reportValidity();
      }
    }
  };

  return (
    <div>
      <html lang='en'>
        <HeaderLink />
        <body>
          <section id='hero' class='hero whole_hero'>
            <Header />
            <div class='hero_content'>
              <div class='top container'>
                <h1 class='m-b uppercased'>
                  Move Cargo easily.
                  <br />
                  Air. Ocean. Customs.
                  <br />
                  For Africa.
                </h1>
                <h4 class='col_7 mb3'>
                  We manage the entire process of shipping cargo via Air and
                  Ocean, from suppliers around the world to your destination
                  &mdash; including customs clearance, trucking and warehousing.
                </h4>
                <div class='col_5 hero_form' id='hero-form'>
                  <form
                    // action='https://app.trysend.com/register'
                    // method='GET'
                    onSubmit={handleGetStarted}
                    id='form'
                  >
                    <div class='column col_8'>
                      <input
                        type='text'
                        id='email'
                        placeholder='Enter business email'
                        name='email'
                        required
                        style={{ fontSize: "100%", borderRadius: 0 }}
                      />
                    </div>
                    <div class='column col_4'>
                      <input
                        type='submit'
                        class='btn'
                        value='Get Started &nbsp; &rarr;'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class='_inner ___cut'></div>
            <div class='_inner __cut'></div>
          </section>
          <section class='how_works feature' id='overview'>
            <div class='align_center mb4 pt4 col_7 margin_center'>
              <span class='color_initial m-b weight_bolder block_disp uppercased'>
                What we do
              </span>
              <h1 class='m-b'>One Platform for African Trade</h1>
              <p class='bigger_p'>
                Get visibility and control of your supply chain with instant
                quotes, simple bookings, predictable costs, reports, and real
                time tracking as your cargo moves via air, ocean or land.
              </p>
            </div>
            <div class='product_view'>
              <img src={ShipmentsImg} alt='Shipments Dashboard' />
            </div>
            <div class='bk_gray benefits'>
              <div class='container'>
                <ol class='clearfix'>
                  <li class='column col_4'>
                    <div class='feature_icon request whole_icon'>
                      <img src={VanOutlineImg} />
                    </div>
                    <h3 class='m-b'>Instant Quotes</h3>
                    <p>
                      Get instant quotes. Know your entire cost upfront in
                      detail. No more waiting days for quotes with hidden fees.
                    </p>
                  </li>
                  <li class='column col_4'>
                    <div
                      class='feature_icon track whole_icon whole_icon_icon'
                      style={{ marginTop: "-17px", marginBottom: "13px" }}
                    >
                      <IonIcon icon={laptopOutline} />
                      {/* <ion-icon name='laptop-outline'></ion-icon> */}
                    </div>
                    <h3 class='m-b'>Simple Booking &amp; Payments</h3>
                    <p>
                      Book from your computer. Invite your supplier to input
                      data. Upload shipping documents and manage payments.
                    </p>
                  </li>
                  <li class='column col_4'>
                    <div class='feature_icon rate whole_icon'>
                      <img src={ChartImg} />
                    </div>
                    <h3 class='m-b'>Track &amp; Manage</h3>
                    <p>
                      Know where your cargo is in real time. Get full visibility
                      and control of your supply chain and receive
                      notifications.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          <section class='feature services' id='services'>
            <div class='container'>
              <h1 class='mb col_6'>Our Services</h1>
              <p class='bigger_p mb4 col_7'>
                Move your cargo across multiple modes from origin to
                destination. SEND handles all including regulatory requirements
                and documentation.
              </p>
              <div class='clearfix pt4'>
                <div class='column col_6 _service bk_purple _air_freight mb4'>
                  <h2 class='mb'>Air Freight</h2>
                  <p>
                    We move time critical shipments across a wide range of
                    countries - in and out of Africa. Our consolidator
                    relationships ensure your cargo never gets delayed.
                  </p>
                  <IonIcon icon={airplaneOutline} />
                  {/* <ion-icon name='airplane-outline'></ion-icon> */}
                </div>
                <div class='column col_6 _service bk_purple _ocean_freight mb4'>
                  <h2 class='mb'>Ocean Freight</h2>
                  <p class='col_10'>
                    Whether LCL or FCL, we've got you. From origin to
                    destination and even trucking - We bring it to you door.
                  </p>
                  <div class='_service_icon'>
                    <img src={VesselsImg} />
                  </div>
                </div>
              </div>
              <div class='clearfix'>
                <div class='column col_6 _service __truck bk_purple mb4'>
                  <h2 class='mb'>Inland Transport</h2>
                  <p>
                    With our trucking and barging partners, our pre-negotiated
                    longterm deals put us in a unique position to move your
                    cargo safely and swiftly.
                  </p>
                  <div class='_service_icon'>
                    <img src={TruckImg} />
                  </div>
                </div>
                <div class='column col_6 _service bk_purple mb4'>
                  <h2 class='mb'>Customs Clearance</h2>
                  <p class='col_10'>
                    We digitize the customs processes across Africa and combine
                    professionals to help you comply with all relevant
                    regulations.
                  </p>
                  <IonIcon icon={shieldOutline} />
                  {/* <ion-icon name='shield-outline'></ion-icon> */}
                </div>
              </div>
            </div>
          </section>
          <section class='get_started_section clearfix'>
            <div class='container'>
              <div class='col_8 column mb3'>
                <h2 class='_bold m-b'>Sign up for free and get started</h2>
                <p class='col_10'>
                  We like the idea of African trade. We are customer obsessed.
                  Leave the shipping to us and grow your business.
                </p>
              </div>
              <div class='col_4 column pt'>
                <a
                  id='get-started-btn-bottom'
                  class='btn get_started_ right'
                  onClick={() => (document.documentElement.scrollTop = 10)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
          <Footer />
        </body>
      </html>
    </div>
  );
};

export default WebsitePage;
