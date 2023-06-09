import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Get from "./components/Get/Get";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import { Helmet } from "react-helmet";

function App() {
  const scrollToComponent = (id) => {
    const targetComponent = document.getElementById(id);
    targetComponent.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Helmet>
        <script>
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}
        (window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1671267156652146');
        fbq('track', 'PageView');`}
        </script>
        <noscript>
          {` <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=1671267156652146&ev=PageView&noscript=1"
          /
          >`}
        </noscript>
      </Helmet>
      <Header scrollToComponent={scrollToComponent} />
      <div className="main_div">
        <Home scrollToComponent={scrollToComponent} />
        <Get scrollToComponent={scrollToComponent} />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
