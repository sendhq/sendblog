import React from "react";
import { Helmet } from "react-helmet";
import { IonIcon } from "@ionic/react";
import { menuSharp, closeOutline } from "ionicons/icons";

export const HeaderLink = () => {
  return (
    <>
      <Helmet>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
          content='SEND manages the entire process of moving freight by air, ocean and road to and from Africa - including customs clearance, and supply chain finance. Our application provides instant quotes & bookings,  document management, cost transparency, notifications and tracking for your cargo.'
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
    </>
  );
};

export const Header = () => {
  return (
    <header class='clearfix container'>
      <div class='mobile_nav_wrap'>
        <a href='#' class='mobile_nav navbar_cllapse mobile_show'>
          <IonIcon icon={menuSharp} />
          {/* <ion-icon name='menu-sharp'></ion-icon> */}
        </a>
      </div>
      <div class='clearfix mb index_logo column col_2'>
        <a class='send-logotype logo' href='/'></a>
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
          <a
            href='https://app.trysend.com/guest-quote'
            class='covid_color'
            target='_blank'
          >
            Get a Quote
          </a>
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
  );
};

export default Header;
