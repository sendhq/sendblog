import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from "ionicons/icons";
import { Helmet } from "react-helmet";
import initMap from "../../../utils/map";

export const Footer = () => {
  return (
    <>
      <Helmet>
        <script src='https://chat-assets.frontapp.com/v1/chat.bundle.js'></script>
        {/* <script>{`${
          window.FrontChat ? window.FrontChat("init", frontChatConfig) : null
        }`}</script>

        <script>
          {window.FrontChat("init", {
            chatId: "6d8da59cc3a54b72d42074dd08d7fc60",
            useDefaultLauncher: true,
          })}
        </script> 

        <script
          type='text/javascript'
          src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'
        ></script>
        <script type='text/javascript' src='js/script.js'></script> */}

        <script
          type='module'
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        ></script>
        <script
          nomodule
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        ></script>
       
        
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
          "email": "support@send.ng",
          "founder": ":Larry Oti",
          "foundingDate": "2017",
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
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbFzE9EPeGbozrJIKOFTvsC5dGkisCPzA&libraries=places&callback=${initMap}`}
          async
          defer
        ></script> */}
      </Helmet>

      <section class='section_footer bk_original color_white'>
        <div class='container clearfix mb4 help_request'>
          <div class='column col_6'>
            <h1 class='color_white major _bold'>We're here to help</h1>
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
              SEND is a digital freight forwarder and customs broker for Africa.
              We manage the entire process of shipping freight by air and ocean,
              including customs clearance and final delivery &mdash; using
              software to provide instant quotes, document management, cost
              transparency and control across your supply chain.
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
            <a href='about' target='_blank'>
              About
            </a>
            <a href='https://blog.trysend.com' target='_blank'>
              Blog
            </a>
            <a href='cookies' class='' target='_blank'>
              Cookies
            </a>
            <a href='privacy' target='_blank'>
              Privacy Policy
            </a>
            <a href='terms' class=''>
              Terms and Conditions{" "}
            </a>
          </div>
          <div class='column col_2 _links'>
            <h3 class=''>Get Started</h3>
            <a href='mailto:support@send.ng' class=''>
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
          &copy; 2020 SEND. All Rights Reserved. Copyright for all brand logos
          belong to respective owners.
        </p>
      </section>
    </>
  );
};

export default Footer;
