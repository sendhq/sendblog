import React from "react";
import { HeaderLink, Header } from "./website/headerblock";
import { Footer } from "./website/footer";

export const Cookies = () => {
  return (
    <div>
      <html lang='en'>
        <HeaderLink />
        <body>
          <section id='hero' class='hero whole_hero'>
            <Header />
          </section>
          <section class='static_section container mb4'>
            <div class='row'>
              <div class='col_8 margin_center mb3 t_c'>
                <h1 class='major _bold uppercased mb align_center'>
                  Cookies Policy
                </h1>
                <p class='mb4'>
                  SEND (“we” or “us” or “our”) may use cookies, web beacons,
                  tracking pixels, and other tracking technologies when you
                  visit our website, including any other media form, media
                  channel, mobile website, or mobile application related or
                  connected thereto (collectively, the “Site”) to help customize
                  the Site and improve your experience.
                </p>
                <p>
                  By continuing to use our Site and services, you are agreeing
                  to the use of cookies and similar technologies for the
                  purposes we describe in this policy. If you do not accept the
                  use of cookies and similar technologies, do not use this site.
                </p>
                <p>
                  We also reserve the right to make changes to this Cookie
                  Policy at any time and for any reason. We will alert you about
                  any changes by updating the “Last Updated” date of this Cookie
                  Policy. Any changes or modifications will be effective
                  immediately upon posting the updated Cookie Policy on the
                  Site, and you waive the right to receive specific notice of
                  each such change or modification.
                </p>
                <p>
                  You are encouraged to periodically review this Cookie Policy
                  to stay informed of updates. You will be deemed to have been
                  made aware of, will be subject to, and will be deemed to have
                  accepted the changes in any revised Cookie Policy by your
                  continued use of the Site after the date such revised Cookie
                  Policy is posted.
                </p>
                <h2>What is a cookie?</h2>
                <p>
                  A cookie is a simple text file that is stored on your computer
                  or mobile device by a website’s server. Each cookie is unique
                  to your web browser. It will contain some anonymous
                  information such as a unique identifier and the site name and
                  some digits and numbers.
                </p>

                <h2>How does SEND use cookies?</h2>
                <p>
                  SEND uses different types of cookies to enhance and improve
                  your experience. SEND uses cookies for:
                </p>
                <div class='mb4'>
                  <h3>Security</h3>
                  <p>
                    We use cookies to enable and support our security features,
                    for example: to authenticate Members, prevent fraudulent use
                    of login credentials, and protect Member data from
                    unauthorized parties.
                  </p>
                  <h3>Preferences</h3>
                  <p>
                    When you are signed into your account, cookies help us
                    display the correct information and personalize your
                    experience, by providing you with features, insights, and
                    customized content. They can also help you fill out forms
                    more easily, e.g., Request for Information (RFI) forms. Loss
                    of the information stored in a preference cookie may make
                    the Site experience less functional but should not prevent
                    it from working.
                  </p>
                  <h3>Session State</h3>
                  <p>
                    We collect information about how our Users and Members use
                    and interact with the Site. This may include the pages
                    Members visit most often and when and where Members get
                    error messages. We use these “session state cookies” to help
                    us improve our Site and Services. Blocking or deleting these
                    cookies will not prevent the Site from working.
                  </p>
                  <h3>Analytics</h3>
                  <p>
                    These cookies help us learn how our Site performs in
                    different locations. We use cookies to understand and
                    improve our Services and features.
                  </p>
                </div>
                <h2>Control of Cookies</h2>
                <p>
                  Some people find the idea of a website storing information on
                  their computer or mobile device to be intrusive, particularly
                  when this information is stored and used by a third party
                  without them knowing. Although cookies are generally quite
                  harmless, you may not, for example, want to see advertising
                  that has been targeted to your interests using your browser
                  history. If you prefer, you may choose to block some or all
                  cookies, or even to delete cookies that have already been set;
                  but you should be aware that you might lose some functions of
                  the website.
                </p>
                <p>
                  If you want to restrict or block the cookies that are set by
                  our Site, or any other site, you can do so through your
                  browser setting. The ‘Help’ function in your browser should
                  explain how. Alternatively, you can visit
                  www.aboutcookies.org, which contains comprehensive information
                  on how to do this on a wide variety of browsers. You will find
                  general information about cookies and details on how to delete
                  cookies from your devices.
                </p>
                <h2>Privacy Policy</h2>
                <p>
                  For more information about how we use information collected by
                  cookies and other tracking technologies, please refer to our
                  Privacy Policy [Link to Privacy Policy]. This Cookie Policy is
                  part of and is incorporated into our Privacy Policy. By using
                  the Site, you agree to be bound by this Cookie Policy and our
                  Privacy Policy.
                </p>
                <h2>Contact Us</h2>
                <p>
                  All access requests, questions, comments, complaints, and
                  other requests regarding the cookies policy should be sent to
                  <a href='support@send.ng.'>support@send.ng.</a>
                </p>
                <p>
                  We may request additional details from you regarding your
                  complaints and keep records of your requests and resolution
                </p>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <Footer />
        </body>
      </html>
    </div>
  );
};

export default Cookies;
