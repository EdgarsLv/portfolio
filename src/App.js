import React, { useEffect } from "react";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import About from "./components/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/servises/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import ReactGa from "react-ga";
import { AnimatePresence } from "framer-motion";

AOS.init();

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-158929588-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      <Layout>
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={Header} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
