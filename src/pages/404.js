import React from "react";
import { HeaderLink, Header } from "./website/headerblock";
import { Footer } from "./website/footer";


const NotFoundPage = () => (

	<div>
      <html lang='en'>
        <HeaderLink />
        <body>

            <Header />

		    <div class="not_found_page align_center">
		      	<h1>NOT FOUND</h1>
		      	<p class="bigger_p">You just hit a route that doesn&#39;t exist... the sadness.</p>
		    </div>

          	<Footer />
        </body>
      </html>
    </div>

);

export default NotFoundPage;
