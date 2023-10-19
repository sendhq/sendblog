import React, { useEffect, useState } from "react";
import { withPrefix } from "gatsby";
import { IonIcon } from "@ionic/react";
import { Helmet } from "react-helmet";
import { isEmail } from "../../../utils/methods";
import {
  laptopOutline,
  logoFacebook,
  menuSharp,
  closeOutline,
  airplaneOutline,
  shieldOutline,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from "ionicons/icons";

import "../../components/css/fonts.css";
import "../../components/css/reset.css";
import "../../components/css/style.css";
import "../../components/css/main.css";

import ShipmentsImg from "../../components/img/shipments.png";
import VanOutlineImg from "../../components/img/van_outline.svg";
import VesselsImg from "../../components/img/vessel.svg";
import TruckImg from "../../components/img/truck.svg";
import ChartImg from "../../components/img/chart.svg";
import missingImg from "../../components/img/person.png";

// eslint-disable
const WebsitePage = () => {
  {
    /*}
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
*/
  }

  return (
    <div>
      <html lang='en'>
        <Helmet>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>
            SEND | Digital Freight Forwarder & Customs Broker for Africa
          </title>
          <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
          <meta
            name='keywords'
            content='SEND, shipping, china, india, ship from china, payments, logistics, international shipping, nationwide delivery, air freight, cargo, delivery companies in nigeria, shipping companies in nigeria, shipping companies in lagos, abuja delivery'
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-105776726-1'
          ></script>
          <script>
            {/* rewrite this */}
            {/* {() => {
          
              window.dataLayer = window.dataLayer || [];
              function gtag(dataLayer, args) {
                dataLayer.push(args);
              }
              gtag("js", new Date());

              gtag("config", "UA-105776726-1");
            }} */}
          </script>

          <meta
            name='description'
            content='SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs processes, trucking and warehousing. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.'
          />
          <meta name='referrer' content='no-referrer-when-downgrade' />
          <meta name='robots' content='all' />
          <meta content='1900998056816528' property='fb:profile_id' />
          <meta content='en_US' property='og:locale' />
          <meta content='website' property='og:type' />
          <meta property='og:url' content='http://www.trysend.com' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='SEND | Digital Freight Forwarder & Customs Broker for Africa'
          />
          <meta
            property='og:description'
            content='SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs processes, trucking and warehousing. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.'
          />
          <meta
            property='og:image'
            content='https://www.trysend.com/img/opengraph.png'
          />
          <meta content='1200' property='og:image:width' />
          <meta content='630' property='og:image:height' />
          <meta
            content='SEND logo - in dark blue color'
            property='og:image:alt'
          />
          <meta
            content='https://www.instagram.com/sendfreight/'
            property='og:see_also'
          />
          <meta
            content='https://www.youtube.com/channel/UCMxgRsPEBn9gZ1qLOhgvbbA'
            property='og:see_also'
          />
          <meta
            content='https://www.linkedin.com/company/send-freight/'
            property='og:see_also'
          />
          <meta
            content='https://www.facebook.com/sendhq/'
            property='og:see_also'
          />
          <meta
            content='https://twitter.com/sendfreight'
            property='og:see_also'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@sendfreight' />
          <meta name='twitter:creator' content='@sendfreight' />
          <meta
            name='twitter:title'
            content='SEND | Digital Freight Forwarder & Customs Broker for Africa'
          />
          <meta
            name='twitter:description'
            content='SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs processes, trucking and warehousing. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.'
          />
          <meta
            name='twitter:image'
            content='https://www.trysend.com/img/twitter-card.png'
          />
          <meta name='twitter:image:width' content='1024' />
          <meta name='twitter:image:height' content='512' />
          <meta
            name='twitter:image:alt'
            content='SEND logo - in dark blue color'
          />
          <meta
            name='p:domain_verify'
            content='f134ebcc215583c9047354989e2aa2a1'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={`img/favicon.ico`}
            // href={`${withPrefix("/")}img/favicon.ico`}
          />
          <link
            rel='icon'
            type='image/png'
            href={`img/favicon.ico`}
            // href={`${withPrefix("/")}img/favicon.ico`}
            sizes='32x32'
          />
          <link
            rel='icon'
            type='image/png'
            // href={`${withPrefix("/")}img/favicon.ico`}
            href={`img/favicon.ico`}
            sizes='16x16'
          />

          <link rel='mask-icon' href={`img/favicon.ico`} color='#ff4400' />
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href={`img/favicon.ico`}
            // href={`${withPrefix("/")}img/favicon.ico`}
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <body>
          <section id='hero' class='hero'>
            <header class='clearfix container'>
              <div class='mobile_nav_wrap'>
                <a href='#' class='mobile_nav navbar_cllapse mobile_show'>
                  <IonIcon icon={menuSharp} />
                  {/* <ion-icon name='menu-sharp'></ion-icon> */}
                </a>
              </div>

              <div class='clearfix index_logo column col_2'>
                <a class='send-logotype logo' href='/#'></a>
              </div>

              <nav class='navbar navbar_colapse clearfix column col_10'>
                <div class='align_right mobile_show'>
                  <p class='color_white close_close_btn'>
                    <IonIcon icon={closeOutline} />
                    {/* <ion-icon name='close-outline'></ion-icon> */}
                  </p>
                </div>
                <ul class='nav left'>
                  <a href='/#platform' class='_anchor'>
                    Platform
                  </a>
                  <a href='/#services' class='_anchor'>
                    Our Services
                  </a>
                  {/* <a
                    href='https://app.trysend.com/guest-quote'
                    class='covid_color'
                    target='_blank'
                  >
                    Get a Quote
                  </a> */}
                  <a href='blog' target='_blank'>
                    Our Blog
                  </a>
                </ul>
                <ul class='clearfix right'>
                  <a
                    href='https://app.trysend.com/login'
                    class='weight_bolder btn login_btn'
                    style={{ display: "initial" }}
                  >
                    Login
                  </a>
                  <a
                    id='get-started-btn'
                    href='https://calendly.com/send-freight/demo'
                    target='_blank'
                    class='btn'
                    style={{ display: "initial" }}
                  >
                    Book a Demo
                  </a>
                </ul>
              </nav>
            </header>

            <div class='hero_content container clearfix'>
              <div class='top col_8'>
                <h1 class='m-b col_10'>
                  Digital freight forwarder and supply chain operating system.
                </h1>

                <h4 class='col_10 mb4'>
                  We manage the entire process of shipping cargo via Air and
                  Ocean, from suppliers around the world to your destination
                  &mdash; including customs clearance, trucking and warehousing.
                </h4>

                <a
                  id='get-started-btn'
                  href='https://calendly.com/send-freight/demo'
                  target='_blank'
                  class='btn'
                  style={{ display: "initial" }}
                >
                  Book a Demo
                </a>
              </div>

              <div class='_inner'>
                <div class='dummy_notif one'>
                  <div class='avatr'>
                    <img src={missingImg} />
                  </div>
                  <div class='dummy_notif_details'>
                    <span>SH-123456</span>
                    <p></p>
                  </div>
                </div>

                <div class='dummy_notif two'>
                  <div class='avatr'>
                    <img src={missingImg} />
                  </div>
                  <div class='dummy_notif_details'>
                    <span>SH-123456</span>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class='how_works feature' id='platform'>
            <div class='align_center mb4 pt4 col_6 margin_center'>
              <span class='color_initial m-b weight_bolder block_disp uppercased'>
                What we do
              </span>
              <h1 class='m-b'>One Platform for African Trade</h1>
              <p class='bigger_p'>
                Get visibility and control of your supply chain with simple
                bookings, 3PL management, predictable costs, reports, and real
                time tracking as your cargo moves via air, ocean or land.
              </p>
            </div>
            <br />

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
                    <h2 class='m-b'>Booking &amp; Collaboration</h2>
                    <p>
                      Making bookings from your computer. Invite your network,
                      including suppliers and buyers. Manage shipping
                      documents..
                    </p>
                  </li>

                  <li class='column col_4'>
                    <div class='feature_icon rate whole_icon'>
                      <img src={ChartImg} />
                    </div>
                    <h2 class='m-b'>Tracking &amp; Visibility</h2>
                    <p>
                      Know where your cargo is in real time. Get full visibility
                      and control of your supply chain and receive
                      notifications.
                    </p>
                  </li>

                  <li class='column col_4'>
                    <div
                      class='feature_icon track whole_icon whole_icon_icon'
                      style={{ marginTop: "-17px", marginBottom: "8px" }}
                    >
                      <IonIcon icon={laptopOutline} />
                      {/* <ion-icon name='laptop-outline'></ion-icon> */}
                    </div>
                    <h2 class='m-b'>Integrations</h2>
                    <p>
                      Sync data with your internal systems, TMS or ERPs like
                      SAP, Salesforce, and Quickbooks. No need to do double
                      entry,
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section class='feature services' id='services'>
            <div class='container'>
              <div class='col_5'>
                <h1 class='mb'>Our Services</h1>
                <p class='bigger_p mb4 col_10'>
                  Move your cargo across multiple modes from origin to
                  destination. SEND handles all including regulatory
                  requirements and documentation.
                </p>
              </div>

              <div class='col_7'>
                <div class='clearfix _service_wrap'>
                  <div class='col_6 _service bk_purple _air_freight mb'>
                    <h2 class='mb'>Air Freight</h2>
                    <p>
                      We move time critical shipments across a wide range of
                      countries - in and out of Africa. Our consolidator
                      relationships ensure your cargo never gets delayed.
                    </p>
                    <IonIcon icon={airplaneOutline} />
                    {/* <ion-icon name='airplane-outline'></ion-icon> */}
                  </div>
                  <div class='col_6 _service bk_purple _ocean_freight mb'>
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

                <div class='clearfix _service_wrap'>
                  <div class='col_6 _service __truck bk_purple mb4'>
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
                  <div class='col_6 _service bk_purple mb4'>
                    <h2 class='mb'>Customs Clearance</h2>
                    <p class='col_10'>
                      We digitize the customs processes across Africa and
                      combine professionals to help you comply with all relevant
                      regulations.
                    </p>
                    <IonIcon icon={shieldOutline} />
                    {/* <ion-icon name='shield-outline'></ion-icon> */}
                  </div>
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
                  href='https://calendly.com/send-freight/demo'
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </section>

          <Helmet>
            <script
              type='text/javascript'
              src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'
            ></script>
            <script
              type='module'
              src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
            ></script>
            <script
              nomodule
              src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
            ></script>
            {/* <script type='text/javascript' src='js/script.js'></script> */}
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@id": "https://www.trysend.com#identity",
          "@type": "Corporation",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Nigeria",
            "addressRegion": "Lagos",
            "postalCode": "N/A",
            "streetAddress": "Yaba, Lagos"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "telephone": "+234 909 862 0543"
            }
          ],
          "description": "SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs processes, trucking and warehousing. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.",
          "email": "care@send.ng",
          "founder": ":Larry Oti",
          "foundingDate": "2018",
          "foundingLocation": "Lagos, Nigeria",
          "image": {
            "@type": "ImageObject",
            "height": "800",
            "url": "https://www.trysend.com/img/twitter.png",
            "width": "800"
          },
          "logo": {
            "@type": "ImageObject",
            "height": "800",
            "url": "https://www.trysend.com/img/twitter.png",
            "width": "800"
          },
          "name": "SEND",
          "sameAs": [
            "https://twitter.com/sendfreight",
            "https://www.facebook.com/sendhq/",
            "https://www.linkedin.com/company/send-freight/",
            "https://www.youtube.com/channel/UCMxgRsPEBn9gZ1qLOhgvbbA/",
            "https://www.instagram.com/sendfreight/"
          ],
          "telephone": "+234 909 862 0543",
          "url": "https://www.trysend.com"
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
                "@type": "Corporation",
                description:
                  "SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs processes, trucking and warehousing. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.",
                image: {
                  "@type": "ImageObject",
                  url: "https://www.send.com/img/opengraph.png",
                },
                mainEntityOfPage: "https://www.trysend.com/",
                name: "SEND | Digital Freight Forwarder & Customs Broker for Africa",
                url: "https://www.trysend.com/",
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@type": "Product",
          name: "Air Freight",
          description:
            "SEND offers customers the speed and flexibility that comes with air - flying your cargo whenever you want and making you are in control.",
          url: "https://www.trysend.com/",
          brand: {
            "@type": "Brand",
            name: "SEND",
            logo: "https://www.trysend.com/img/send.svg",
          },
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@type": "Product",
          name: "Ocean Freight",
          description:
            "Whether FCL or LCL, we make ocean shipping easier and more transparent and reliable than you ever known.",
          url: "https://www.trysend.com/",
          brand: {
            "@type": "Brand",
            name: "SEND",
            logo: "https://www.trysend.com/img/send.svg",
          },
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@type": "Product",
          name: "Customs Brokerage",
          description:
            "We help you clear your goods through customs, making sure you comply with all regulatory agencies requirements across origin and destination country.",
          url: "https://www.trysend.com/",
          brand: {
            "@type": "Brand",
            name: "SEND",
            logo: "https://www.trysend.com/img/send.svg",
          },
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@id": "#creator",
          "@type": "Organization",
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          description: "Breadcrumbs list",
          itemListElement: [
            {
              "@type": "ListItem",
              item: { "@id": "https://www.trysend.com/", name: "Home" },
              position: 1,
            },
          ],
          name: "Breadcrumbs",
        }
    `}</script>
            <script type='application/ld+json'>{`
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          description: "Breadcrumbs list",
          itemListElement: [
            {
              "@type": "ListItem",
              item: { "@id": "https://www.trysend.com/", name: "Home" },
              position: 1,
            },
          ],
          name: "Breadcrumbs",
        }
    `}</script>
          </Helmet>

          <section class='section_footer bk_original color_white'>
            <div class='container clearfix mb4 help_request'>
              <div class='column col_6'>
                <h1 class='color_white major'>We are here to help.</h1>
              </div>
              <div class='column col_6 mb4'>
                <p class='mb'>Contact our support team anytime.</p>
                <p class='weight_bolder ion-chevron-right'>
                  <a class='color_white' href='https://wa.me/2349098620543'>
                    +234 909 862 0543
                  </a>
                </p>
                <p class='weight_bolder ion-chevron-right'>
                  <a class='color_white' href='mailto:care@send.ng'>
                    care@send.ng
                  </a>
                </p>
              </div>
            </div>
            <div class='clearfix mb4 container footer_links'>
              <div class='column col_8'>
                <p class=''>
                  <a class='send-logotype logo color_white' href='/'></a>
                </p>
                <p class='mb3 col_9 footer_talk'>
                  SEND is a digital freight forwarder and customs broker for
                  Africa. We manage the entire process of shipping freight by
                  air and ocean, including customs clearance and supply chain
                  finance &mdash; using software to provide quotes, document
                  management, cost transparency and control across your supply
                  chain.
                </p>
                <div class='width_100 social_icons'>
                  <a
                    href='https://www.facebook.com/sendhq'
                    class=''
                    target='_blank'
                  >
                    <IonIcon icon={logoFacebook} />
                    {/* <ion-icon name='logo-facebook'></ion-icon> */}
                  </a>
                  <a
                    href='https://www.twitter.com/sendfreight'
                    class=''
                    target='_blank'
                  >
                    <IonIcon icon={logoTwitter} />
                    {/* <ion-icon name='logo-twitter'></ion-icon> */}
                  </a>
                  <a
                    href='https://www.instagram.com/sendfreight'
                    class=''
                    target='_blank'
                  >
                    <IonIcon icon={logoInstagram} />
                    {/* <ion-icon name='logo-instagram'></ion-icon> */}
                  </a>
                  <a
                    href='https://www.linkedin.com/company/send-freight'
                    class=''
                    target='_blank'
                  >
                    <IonIcon icon={logoLinkedin} />
                    {/* <ion-icon name='logo-linkedin'></ion-icon> */}
                  </a>
                </div>
              </div>
              <div class='column col_2 _links'>
                <h3 class=''>Company</h3>
                <a href='about' target=''>
                  About
                </a>
                <a href='blog' target='_blank'>
                  Blog
                </a>
                <a href='cookies' class='' target=''>
                  Cookies
                </a>
                <a href='privacy' target=''>
                  Privacy Policy
                </a>
                <a href='terms' class=''>
                  Terms of Service{" "}
                </a>
              </div>

              <div class='column col_2 _links'>
                <h3 class=''>Book a Demo</h3>
                <a href='mailto:care@send.ng' class=''>
                  Contact
                </a>
                <a href='https://help.trysend.com/' target='_blank' class=''>
                  Help Center
                </a>
                <a href='https://app.trysend.com' class=''>
                  Business Login
                </a>
              </div>
            </div>

            <p class='aligncenter copy container'>
              &copy; 2023 SEND. All Rights Reserved. Copyright for all brand
              logos belong to respective owners.
            </p>
          </section>
        </body>
      </html>
    </div>
  );
};

export default WebsitePage;
