import React from "react";
import {
  Hero,
  Curriencies,
  Users,
  Navbar,
  Footer,
  FrequentlyAsk,
  Sponsers,
  Discover,
  Dashboard,
} from "./components";
import {
  curriencies,
  hero,
  user,
  navlinks,
  footerAPI,
  faqs,
  sponser,
  discover,
  dashboard,
} from "./data/Data";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Curriencies curriencies={curriencies} />
      <Sponsers sponser={sponser} />
      <Discover discover={discover} />
      <Dashboard dashboard={dashboard} />
      <Users user={user} />

      <FrequentlyAsk faqs={faqs} />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
